<template>
  <article
    class="group relative bg-white overflow-hidden transition-all duration-500 h-full flex flex-col border border-gray-100"
    :style="cardStyles"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Gradient Overlay Background -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-gray-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    ></div>

    <!-- Featured Image -->
    <div
      v-if="showImage && processedImage"
      :class="imageAspectClass"
      class="relative overflow-hidden"
    >
      <a :href="url" class="block w-full h-full">
        <img
          :src="processedImage"
          :alt="imageAlt"
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <!-- Image Overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        ></div>
      </a>
    </div>

    <!-- Content -->
    <div class="relative p-6 flex-1 flex flex-col z-10">
      <!-- Tags -->
      <div
        v-if="showTags && processedTags.length > 0"
        class="flex flex-wrap gap-2 mb-4"
      >
        <span
          v-for="tag in processedTags.slice(0, 3)"
          :key="tag"
          class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Title -->
      <h3
        class="text-xl mb-2 transition-colors duration-300 line-clamp-2"
        @mouseenter="titleHovered = true"
        @mouseleave="titleHovered = false"
      >
        <a
          :href="url"
          class="hover:underline decoration-2 underline-offset-2"
          :style="titleHovered ? { color: 'var(--color-primary, #dc2626)' } : {}"
          >{{ title }}</a
        >
      </h3>

      <!-- Author and Date Meta (right after title) -->
      <div
        v-if="(showAuthor && author) || (showDate && formattedDate)"
        class="flex items-center gap-2 text-xs text-gray-500 mb-4"
      >
        <span v-if="showAuthor && author">{{ author }}</span>
        <span
          v-if="showAuthor && author && showDate && formattedDate"
          class="text-gray-300"
          >•</span
        >
        <time
          v-if="showDate && formattedDate"
          :datetime="rawPublishedAt || publishedAt"
          >{{ formattedDate }}</time
        >
      </div>

      <!-- Excerpt -->
      <div class="flex-1 mb-6">
        <p v-if="excerpt" class="text-gray-600 line-clamp-2">
          {{ excerpt }}
        </p>
        <div
          v-else-if="content"
          class="text-gray-600 line-clamp-2"
          v-html="truncatedContent"
        ></div>
      </div>

      <!-- Read More Button -->
      <div class="mt-auto">
        <a
          :href="url"
          class="inline-flex items-center gap-2 font-semibold text-sm group transition-all duration-300"
          :style="{
            color: 'var(--color-primary, #dc2626)',
          }"
          @mouseenter="(e) => e.currentTarget.style.opacity = '0.8'"
          @mouseleave="(e) => e.currentTarget.style.opacity = '1'"
        >
          <span>Read Article</span>
          <svg
            class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </article>
</template>

<script>
import { computed, ref } from "vue";

export default {
  name: "ArticleCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    author: {
      type: String,
      default: "",
    },
    publishedAt: {
      type: String,
      default: "",
    },
    rawPublishedAt: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    imageAlt: {
      type: String,
      default: "",
    },
    tags: {
      type: [Array, String],
      default: () => [],
    },
    imageRatio: {
      type: String,
      default: "landscape",
      validator: (value) => ["landscape", "square", "portrait"].includes(value),
    },
    showImage: {
      type: Boolean,
      default: true,
    },
    showAuthor: {
      type: Boolean,
      default: false,
    },
    showDate: {
      type: Boolean,
      default: true,
    },
    showTags: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const isHovered = ref(false);
    const titleHovered = ref(false);

    const imageAspectClass = computed(() => {
      switch (props.imageRatio) {
        case "square":
          return "aspect-square";
        case "portrait":
          return "aspect-[3/4]";
        default:
          return "aspect-[4/3]";
      }
    });

    const cardStyles = computed(() => {
      const baseRadius = "var(--card-radius, 8px)";
      const baseShadow =
        "var(--card-shadow, 0 4px 6px -1px rgba(0, 0, 0, 0.1))";
      const hoverShadow =
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";

      return {
        borderRadius: baseRadius,
        boxShadow: isHovered.value ? hoverShadow : baseShadow,
      };
    });

    const processedTags = computed(() => {
      if (!props.tags) return [];

      // If tags is a string, try to parse it as JSON
      if (typeof props.tags === "string") {
        try {
          const parsed = JSON.parse(props.tags);
          return Array.isArray(parsed) ? parsed : [];
        } catch (error) {
          return [];
        }
      }

      // If it's already an array, return it
      return Array.isArray(props.tags) ? props.tags : [];
    });

    const processedImage = computed(() => {
      if (!props.image) return "";

      // If image is a JSON string (like Shopline's coverImagePath), parse it
      if (typeof props.image === "string" && props.image.startsWith("{")) {
        try {
          const parsed = JSON.parse(props.image);
          return parsed.mediaUrl || parsed.url || "";
        } catch (error) {
          return props.image;
        }
      }

      return props.image;
    });

    const formattedDate = computed(() => {
      // If we have a pre-formatted date from Shopline's {{date}} helper, use it
      // But exclude timestamps that are still showing through
      if (
        props.publishedAt &&
        props.publishedAt.trim() &&
        !props.publishedAt.match(/^\d+$/) && // Not just a timestamp
        !props.publishedAt.includes("T") && // Not ISO date format
        !props.publishedAt.match(/^\d{4}-\d{2}-\d{2}/) && // Not YYYY-MM-DD format
        props.publishedAt.length < 20
      ) {
        // Not a long timestamp string
        return props.publishedAt;
      }

      // Fall back to parsing raw date or the publishedAt value
      const dateToFormat = props.rawPublishedAt || props.publishedAt;
      if (!dateToFormat) return "";

      try {
        // Handle timestamp (number) or date string
        let date;
        const dateStr = String(dateToFormat).trim();

        if (/^\d+$/.test(dateStr)) {
          // If it's a pure number (timestamp)
          const timestamp = parseInt(dateStr);
          // Handle both seconds and milliseconds timestamps
          date = new Date(
            timestamp > 1000000000000 ? timestamp : timestamp * 1000
          );
        } else if (typeof dateToFormat === "string") {
          // If it's a string, parse it
          date = new Date(dateToFormat);
        } else {
          return "";
        }

        // Check if date is valid and reasonable (not year 1755 from bad timestamp)
        if (
          isNaN(date.getTime()) ||
          date.getFullYear() < 1900 ||
          date.getFullYear() > 2100
        ) {
          console.warn(
            "Invalid or unreasonable date:",
            dateToFormat,
            "parsed as:",
            date
          );
          return "";
        }

        // Get locale from Shopline global object
        const locale =
          (typeof window !== "undefined" &&
            typeof window.Shopline !== "undefined" &&
            window.Shopline?.locale?.current) ||
          "en";

        // Format date using Intl.DateTimeFormat with proper locale
        return new Intl.DateTimeFormat(locale, {
          year: "numeric",
          month: "short",
          day: "numeric",
        }).format(date);
      } catch (error) {
        console.warn("Error formatting date:", error, dateToFormat);
        return "";
      }
    });

    const truncatedContent = computed(() => {
      if (!props.content) return "";

      // Strip HTML tags and truncate to ~150 characters
      const textContent = props.content.replace(/<[^>]*>/g, "");
      if (textContent.length <= 150) return textContent;

      return textContent.substring(0, 150).trim() + "...";
    });

    return {
      imageAspectClass,
      processedTags,
      processedImage,
      formattedDate,
      truncatedContent,
      cardStyles,
      isHovered,
      titleHovered,
    };
  },
};
</script>
