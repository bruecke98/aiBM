// stores/main.ts
import { defineStore } from 'pinia';
export const useProjectNameStore = defineStore('projectName', () => {
  // Some code
  if (typeof localStorage !== 'undefined') {
    const projectName = ref('' as string);
    const setProjectName = (name: string) => {
      localStorage.setItem('projectName', name)
      projectName.value = name;
    };
    projectName.value = localStorage.getItem('projectName') || '';
    return { projectName, setProjectName };
  } else {
    // use a different storage mechanism here
    const projectName = ref('' as string);
    const setProjectName = (name: string) => {
      projectName.value = name;
    };
    return { projectName, setProjectName };
  }
  

  

});