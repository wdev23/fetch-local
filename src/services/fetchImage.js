import { ref } from "vue"

class ImageService {
    images

    constructor() {
        this.images = ref([])
    }

    getImages() {
        return this.images
    }

    async fetchAll() {
        try {
            const url = 'http//fetchserviceslocal.dahks.com/images.json'
            const response = await fetch(url)
            const json = await response.json()
            this.images.value = await json
        } catch(error) {
            console.log(error)
        }
    }
}

export default ImageService