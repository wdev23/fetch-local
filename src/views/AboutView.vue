<template>
  <MenuMain />
  <div class="bg-cl_OrangeSoft min-h-screen py-10">
  
    
    <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="bg-cl_dark text-white py-4 px-6">
        <h1 class="text-3xl font-semibold">About the Fetch Images Project</h1>
        <p class="mt-2 text-lg">Leveraging Vue.js to Fetch and Display Images Dynamically</p>
      </div>

      <div class="p-6">
        <h2 class="text-2xl font-semibold mb-4">Project Overview</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          The Fetch Images Project is a simple yet effective demonstration of using Vue.js to fetch data from an external JSON file and display it dynamically within a web application. The project utilizes modern JavaScript techniques such as classes, asynchronous data fetching, and Vue's reactive `ref` feature to manage state.
        </p>

        <h2 class="text-2xl font-semibold mb-4">Key Features</h2>
        <ul class="list-disc pl-5 text-gray-700 leading-relaxed">
          <li>ImageService Class: A custom service that encapsulates the logic for fetching and managing images.</li>
          <li>Reactive State: Uses Vue's `ref` to store and reactively update the list of images.</li>
          <li>Asynchronous Fetching: Fetches image data from a JSON file hosted locally, demonstrating real-world API handling.</li>
          <li>Dynamic Rendering: The fetched images are dynamically rendered into a grid layout using Vue's `v-for` directive.</li>
        </ul>

        <h2 class="text-2xl font-semibold mb-4 mt-6">Project Structure</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          The project is structured around a core service file and a Vue component:
        </p>
        <ul class="list-disc pl-5 text-gray-700 leading-relaxed">
          <li>ImageService Class: Located in the `services` folder, this class handles fetching image data from `images.json`. It uses the `fetch` API to retrieve the data asynchronously and updates the reactive `images` array.</li>
          <li>Vue Component: The component uses Vue's syntax and lifecycle hooks (`onMounted`) to invoke the `fetchAll` method from the `ImageService`. The images are then displayed in a responsive grid layout.</li>
        </ul>

        <h2 class="text-2xl font-semibold mb-4 mt-6">Technologies Used</h2>
        <ul class="list-disc pl-5 text-gray-700 leading-relaxed">
          <li>Vue.js 3</li>
          <li>JavaScript (ES6+)</li>
          <li>Tailwind CSS for styling</li>
          <li>JSON for data storage and retrieval</li>
        </ul>

        <h2 class="text-2xl font-semibold mb-4 mt-6">Conclusion</h2>
        <p class="text-gray-700 leading-relaxed">
          This project is a practical example of how to structure a Vue.js application that interacts with external data. It highlights the use of services to encapsulate logic, reactive state management, and dynamic UI rendering.
        </p>
      </div>
    </div>
  </div>
  
  <MenuFooter />
</template>

<script setup>
import MenuMain from '@/components/menu/MenuMain.vue'
import MenuFooter from '@/components/menu/MenuFooter.vue'
</script>

<style scoped>

</style>