"use client";
import { useEffect, useRef } from "react";

export default function ReviewWidget() {
  const widget = useRef("");

  useEffect(() => {
    async function fetchReviewWidget() {
      const res = await fetch(
        "https://judge.me/api/v1/widgets/product_review?shop_domain=your-daily-widget.myshopify.com&api_token=R0MI75j5Yn871ukChgfoyMHDTiI&external_id=8750293418267",
        { cache: "no-store" }
      );
      const result = await res.json();
      widget.current = result.widget;
    }

    fetchReviewWidget();
  }, []);

  return (
    <div
      className="jdgm-widget jdgm-review-widget jdgm-outside-widget"
      data-id="8750293418267"
      dangerouslySetInnerHTML={{ __html: widget.current }}
    />
  );
}
