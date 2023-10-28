// stores/main.ts
import { defineStore } from 'pinia';
export const useProjectNameStore = defineStore('projectName', () => {
  // Some code
  const projectName = ref('' as string);
    const setProjectName = (name: string) => {
        projectName.value = name;
    };
    return { projectName, setProjectName };

});