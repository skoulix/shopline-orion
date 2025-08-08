<template>
  <div
    v-if="!loading && !error && reviewData"
    class="review-summary"
    @click="scrollToComments"
  >
    <div class="summary-row">
      <span class="stars">
        <span
          v-for="n in 5"
          :key="n"
          :class="['star', { filled: n <= Math.round(reviewData.score) }]"
          >★</span
        >
      </span>
      <span class="average-score">{{ reviewData.score.toFixed(1) }}</span>
      <!-- <span class="total-reviews">({{ reviewData.total }} reviews)</span> -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from "vue";

const props = defineProps({
  productId: {
    type: String,
    required: true,
  },
});

const reviewData = ref(null);
const error = ref(null);
const loading = ref(true);

const fetchReviews = async () => {
  try {
    const response = await fetch(
      "/api/isv-plugin/comment/front/query/summary",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json, text/plain, */*",
        },
        body: JSON.stringify({ productId: props.productId }),
      }
    );
    const data = await response.json();

    if (data.success && data.code === "200") {
      reviewData.value = data.data;
    } else {
      throw new Error(data.msg || "Failed to fetch reviews");
    }
  } catch (err) {
    error.value = `Error loading reviews: ${err.message}`;
  } finally {
    loading.value = false;
  }
};

const scrollToComments = () => {
  const commentSection = document.getElementById("plugin-product-comment");
  if (commentSection) {
    const offset = 150;
    const elementPosition =
      commentSection.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  }
};

onMounted(fetchReviews);
</script>

<style>
.review-summary {
  cursor: pointer;
}

.summary-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: nowrap;
}

.average-score {
  font-weight: bold;
}

.stars {
  gap: 0.1rem;
}

.star {
  font-size: 1.2rem;
  color: #ccc;
}

.star.filled {
  color: #ffd700;
}

.total-reviews {
  color: #666;
}
</style>
