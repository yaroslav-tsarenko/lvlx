<template>
  <div ref="container" class="eggs-fall-container"></div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount, nextTick } from 'vue';
import Matter from 'matter-js';

const paths = [
  "M289.05,84.63L98.225,308.136c-6.35,7.44-9.126,17.291-7.594,26.954l10.514,66.144c1.32,8.312,8.484,14.441,16.901,14.44h66.971c9.785,0,19.079-4.283,25.434-11.725l206.015-241.29c5.93-6.943,5.104-17.379-1.841-23.305l-42.83-36.57c-6.946-5.928-17.38-5.104-23.31,1.837l-152.4,178.477c-3.312,3.872-1.941,7.557-0.754,15.562c0.647,4.358,4.409,7.572,8.817,7.528c8.201-0.082,11.959,0.677,15.254-3.186l104.745-122.653l30.031,25.641l-108.396,126.93c-5.823,6.821-14.307,10.795-23.272,10.904h-40.639c-10.349,0.124-19.191-6.943-20.691-17.18l-5.896-40.215c-1.304-8.875,1.292-17.878,7.118-24.697L321.757,75.111c18.261-21.39,50.409-23.929,71.803-5.664l50.576,43.18c21.395,18.265,23.932,50.414,5.666,71.806L235.457,435.479c-10.447,12.243-25.735,19.284-41.83,19.271h-89.321c-19.688-0.012-36.449-14.382-39.549-33.821l-14.072-88.213c-2.53-15.89,2.027-32.097,12.479-44.339L259.017,58.988L289.05,84.63z"
];

const container = ref(null);
let engine, render, runner;

onMounted(async () => {
  await nextTick();

  const {
    Engine,
    Render,
    Runner,
    Common,
    MouseConstraint,
    Mouse,
    World,
    Vertices,
    Svg,
    Bodies
  } = Matter;

  const width = container.value.clientWidth;
  const height = container.value.clientHeight;

  engine = Engine.create();
  const world = engine.world;

  render = Render.create({
    element: container.value,
    engine,
    options: {
      width,
      height,
      wireframes: false,
      background: 'transparent',
    }
  });

  Render.run(render);
  runner = Runner.create();
  Runner.run(runner, engine);

  const vertexSets = [];

  paths.forEach((path, i) => {
    const newElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
    newElement.setAttribute("d", path);

    const points = Svg.pathToVertices(newElement, 30);
    const scaledPoints = Vertices.scale(points, 0.3, 0.3);
    vertexSets.push(scaledPoints);

    const color = Common.choose([
      "#ff686b", "#ffb627", "#4cc9f0", "#7209b7", "#3f37c9"
    ]);

    const body = Bodies.fromVertices(
        50 + Math.random() * (width - 100),
        -100,
        scaledPoints,
        {
          render: {
            fillStyle: color,
            strokeStyle: color,
            lineWidth: 1
          }
        },
        true
    );

    World.add(world, body);
  });

  // Add walls based on container
  World.add(world, [
    Bodies.rectangle(width / 2, -25, width, 50, {isStatic: true}),     // top
    Bodies.rectangle(width / 2, height + 25, width, 50, {isStatic: true}), // bottom
    Bodies.rectangle(-25, height / 2, 50, height, {isStatic: true}),   // left
    Bodies.rectangle(width + 25, height / 2, 50, height, {isStatic: true})  // right
  ]);

  const mouse = Mouse.create(render.canvas);
  const mouseConstraint = MouseConstraint.create(engine, {
    mouse,
    constraint: {
      stiffness: 0.2,
      render: {visible: false}
    }
  });

  World.add(world, mouseConstraint);
  render.mouse = mouse;
});

onBeforeUnmount(() => {
  Matter.Render.stop(render);
  Matter.Runner.stop(runner);
  Matter.World.clear(engine.world);
  Matter.Engine.clear(engine);
  render.canvas.remove();
  render.textures = {};
});
</script>

<style scoped>
.eggs-fall-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

canvas {
  display: block;
}
</style>