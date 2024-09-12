import Script from "next/script";
import ReviewWidget from "../components/ReviewWidget";
import StarRating from "@/components/StarRating";

export default function Home() {
  return (
    <>
      <Script
        dangerouslySetInnerHTML={{
          __html: `jdgm = window.jdgm || {};jdgm.SHOP_DOMAIN = 'your-daily-widget.myshopify.com';jdgm.PLATFORM = 'shopify';jdgm.PUBLIC_TOKEN = 'R0MI75j5Yn871ukChgfoyMHDTiI';`,
        }}
      />
      <Script
        data-cfasync="false"
        type="text/javascript"
        async
        src="https://cdn.judge.me/widget_preloader.js"
      />
      <Script
        data-cfasync="false"
        type="text/javascript"
        async
        src="https://cdn1.judge.me/assets/installed.js"
      />
      <h1>Hello Nextjs 14.2.10</h1>

      <StarRating />
      <ReviewWidget />
    </>
  );
}
