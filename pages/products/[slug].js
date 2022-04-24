import Error from "next/error";
import { groq } from "next-sanity";
import { useRouter } from "next/router";
import ProductPage from "../../components/ProductPage";
import { getClient, usePreviewSubscription } from "../../utils/sanity";
// import { useEffect, useState } from "react";
// import axios from "axios";

const query = groq`*[_type == "product" && slug.current == $slug][0]`;

function ProductPageContainer({ productData, preview }) {
  const router = useRouter();

  if (!router.isFallback && !productData?.slug) {
    return <Error statusCode={404} />;
  }

  const { data: product = {} } = usePreviewSubscription(query, {
    params: { slug: productData?.slug?.current },
    initialData: productData,
    enabled: preview || router.query.preview !== null,
  });

  const {
    _id,
    title,
    defaultProductVariant,
    mainImage,
    blurb,
    body,
    tags,
    vendor,
    categories,
    slug,
    barcode,
  } = product;

  // const [reviews, setReviews] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const fetchProductReview = async (code) => {
  //   setLoading(true);
  //   await axios
  //     .get(`https://json-server-123456789.herokuapp.com/reviews/${code}`)
  //     .then((res) => {
  //       setReviews(res.data);
  //     })
  //     .catch((res) => setLoading(true));
  // };

  // useEffect(async () => {
  //   await fetchProductReview(barcode);
  // }, [barcode]);

  // if (!loading) {

  // }

  return (
    <ProductPage
      id={_id}
      title={title}
      defaultProductVariant={defaultProductVariant}
      mainImage={mainImage}
      blurb={blurb}
      body={body}
      tags={tags}
      vendor={vendor}
      categories={categories}
      slug={slug?.current}
      barcode={barcode}
    />
  );
}

export async function getStaticProps({ params, preview = false }) {
  const productData = await getClient(preview).fetch(query, {
    slug: params.slug,
  });

  return {
    props: { preview, productData },
  };
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    `*[_type == "product" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export default ProductPageContainer;
