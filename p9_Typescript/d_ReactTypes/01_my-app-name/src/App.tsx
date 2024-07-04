import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const courseParts = [
  {
    name: "Fundamentals",
    exerciseCount: 10,
    description: "This is an awesome course part"
  },
  {
    name: "Using props to pass data",
    exerciseCount: 7,
    groupProjectCount: 3
  },
  {
    name: "Basics of type Narrowing",
    exerciseCount: 7,
    description: "How to go from unknown to string"
  },
  {
    name: "Deeper type usage",
    exerciseCount: 14,
    description: "Confusing description",
    backgroundMaterial: "https://type-level-typescript.com/template-literal-types"
  },
];

interface CoursePartbase {
  name: string;
  exerciseCount: number;
}

interface CoursePartBasic extends CoursePartbase {
  description: string;
  kind: "basic"
}
interface CoursePartGroup extends CoursePartbase {
  groupProjectCount: number;
  kind: "group"
}
interface CoursePartBackground extends CoursePartbase {
  description: string;
  backgroundMaterial: string;
  kind: "background"
}

type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground;


function App() {
  const courseName = 'Half Stack application development';
  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part",
      kind: "basic"
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
      kind: "group"
    },
    {
      name: "Basics of type Narrowing",
      exerciseCount: 7,
      description: "How to go from unknown to string",
      kind: "basic"
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      backgroundMaterial: "https://type-level-typescript.com/template-literal-types",
      kind: "background"
    },
  ]
  courseParts.forEach(part => {
    switch (part.kind) {
      case "basic":
        console.log(part.name, part.description, part.exerciseCount);
        break;
      case "group":
        console.log(part.name, part.exerciseCount, part.groupProjectCount);
        break;
      case "background":
        console.log(part.name, part.exerciseCount, part.backgroundMaterial);
        break;
      default:
        break;
    }
  })
}

export default App
