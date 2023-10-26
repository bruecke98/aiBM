<template>
    <div class=" grid grid-cols-2">
        <div class="p-6 m-6 text-left text-2xl">
            <h1>create</h1>
            <h1>your own</h1>
            <h1>or shared</h1>
            <h1>AI-based</h1>
            <h1>Business Model</h1>
        </div>  
        <div class="text-left text-2xl m-6 p-6">
            <div class="border-2 p-5 rounded-lg">
                <h3>Existing Model </h3>
                    <input 
                        class="mt-6 w-3/4 rounded border border-light-text py-1 px-3"
                        type="text"
                        id="projectName"
                        name="projectName"
                        placeholder="Project Name"
                        required
                    />      
                    <input 
                        class="mt-6 w-3/4 rounded border border-light-text py-1 px-3"
                        type="text"
                        id="projectID"
                        name="projectID"
                        placeholder="Project ID"
                        required
                    />
                    <button class="ml-6 mt-6 mx-auto rounded border border-light-text py-1 px-3">Load</button>
            </div>

            <div class="mt-12 border-2 p-5 rounded-lg">
                <h3>Create new Model </h3>
                    <input 
                        class="mt-6 w-3/4 rounded border border-light-text py-1 px-3"
                        type="text"
                        id="projectName"
                        name="projectName"
                        placeholder="Project Name"
                        required
                    />      
                    <button class="ml-6 mt-6 mx-auto rounded border border-light-text py-1 px-3">Create</button>

            </div>

        </div>
    </div>
</template>

<script setup lang="ts">


</script>
