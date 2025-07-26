<template>
  <div class="video-player relative w-full h-full">
    <div v-if="!videoLoaded" class="video-placeholder w-full h-full" @click="loadVideo">
      <slot />
    </div>
    
    <div v-else class="video-iframe-container w-full h-full">
      <iframe
        :src="videoSrc"
        :title="videoTitle"
        class="w-full h-full"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  videoUrl: {
    type: String,
    required: true
  },
  autoplay: {
    type: [String, Boolean],
    default: false
  },
  muted: {
    type: [String, Boolean],
    default: true
  },
  controls: {
    type: [String, Boolean],
    default: true
  },
  poster: {
    type: String,
    default: ''
  }
})

const videoLoaded = ref(false)
const videoType = ref('')
const videoId = ref('')

const autoplayEnabled = computed(() => {
  return props.autoplay === true || props.autoplay === 'true'
})

const mutedEnabled = computed(() => {
  return props.muted === true || props.muted === 'true'
})

const controlsEnabled = computed(() => {
  return props.controls === true || props.controls === 'true'
})

const videoTitle = computed(() => {
  return `${videoType.value} video player`
})

const videoSrc = computed(() => {
  if (!videoId.value || !videoType.value) return ''
  
  let src = ''
  const autoplayParam = autoplayEnabled.value ? '1' : '0'
  const mutedParam = mutedEnabled.value ? '1' : '0'
  const controlsParam = controlsEnabled.value ? '1' : '0'
  
  if (videoType.value === 'youtube') {
    src = `https://www.youtube.com/embed/${videoId.value}?`
    src += `autoplay=${autoplayParam}&mute=${mutedParam}&controls=${controlsParam}`
    src += '&rel=0&modestbranding=1&playsinline=1'
  } else if (videoType.value === 'vimeo') {
    src = `https://player.vimeo.com/video/${videoId.value}?`
    src += `autoplay=${autoplayParam}&muted=${mutedParam}&controls=${controlsParam}`
    src += '&title=0&byline=0&portrait=0&playsinline=1'
  }
  
  return src
})

const parseVideoUrl = (url) => {
  if (!url) return { type: '', id: '' }
  
  // YouTube patterns
  const youtubePatterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/
  ]
  
  for (const pattern of youtubePatterns) {
    const match = url.match(pattern)
    if (match) {
      return { type: 'youtube', id: match[1] }
    }
  }
  
  // Vimeo patterns
  const vimeoPatterns = [
    /vimeo\.com\/(\d+)/,
    /player\.vimeo\.com\/video\/(\d+)/
  ]
  
  for (const pattern of vimeoPatterns) {
    const match = url.match(pattern)
    if (match) {
      return { type: 'vimeo', id: match[1] }
    }
  }
  
  return { type: '', id: '' }
}

const loadVideo = () => {
  if (videoId.value && videoType.value) {
    videoLoaded.value = true
  }
}

// Auto-load video if autoplay is enabled
const checkAutoLoad = () => {
  if (autoplayEnabled.value && videoId.value && videoType.value) {
    videoLoaded.value = true
  }
}

onMounted(() => {
  // Parse video URL
  const parsed = parseVideoUrl(props.videoUrl)
  videoType.value = parsed.type
  videoId.value = parsed.id
  
  // Add click listener to play button
  const playButton = document.querySelector('.play-button')
  if (playButton) {
    playButton.addEventListener('click', loadVideo)
  }
  
  // Check if we should auto-load
  checkAutoLoad()
})
</script>

<style scoped>
.video-player {
  background-color: #000;
}

.video-placeholder {
  cursor: pointer;
  position: relative;
}

.video-placeholder:hover .play-button {
  transform: scale(1.1);
}

.video-iframe-container {
  position: relative;
  background-color: #000;
}

.video-iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Ensure aspect ratio is maintained */
.video-iframe-container::before {
  content: '';
  display: block;
  padding-top: 56.25%; /* 16:9 aspect ratio */
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .play-button {
    padding: 1rem;
  }
  
  .play-button svg {
    width: 2rem;
    height: 2rem;
  }
}
</style>