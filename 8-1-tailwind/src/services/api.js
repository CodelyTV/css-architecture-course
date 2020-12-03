import courses from "./courses.json";

export const api = {
  getCourses() {
    return new Promise(resolve => {
      resolve(courses);
    });
  }
};
