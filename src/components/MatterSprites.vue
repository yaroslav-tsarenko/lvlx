<!-- src/components/MatterSprites.vue -->
<template>
  <div ref="matterContainer" class="matter-container">

    <div class="square">
      square
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';
import Matter from 'matter-js';
import object1 from "@/assets/images/egg-type-1.svg"
import object2 from "@/assets/images/egg-type-2.svg"
import object3 from "@/assets/images/egg-type-3.svg"
const matterContainer = ref(null);
let engine, runner, render;

onMounted(() => {
  const {
    Engine,
    Render,
    Runner,
    Composites,
    Common,
    MouseConstraint,
    Mouse,
    Composite,
    Bodies,
  } = Matter;

  engine = Engine.create();
  const world = engine.world;

  render = Render.create({
    element: matterContainer.value,
    engine: engine,
    options: {
      width: 800,
      height: 600,
      showAngleIndicator: false,
      wireframes: false,
      background: '#fafafa'
    }
  });

  Render.run(render);
  runner = Runner.create();
  Runner.run(runner, engine);

  // Walls
  const offset = 10;
  const options = { isStatic: true };
  Composite.add(world, [
    Bodies.rectangle(400, -offset, 800.5 + 2 * offset, 50.5, options),
    Bodies.rectangle(400, 600 + offset, 800.5 + 2 * offset, 50.5, options),
    Bodies.rectangle(800 + offset, 300, 50.5, 600.5 + 2 * offset, options),
    Bodies.rectangle(-offset, 300, 50.5, 600.5 + 2 * offset, options)
  ]);

  // Stack
  const stack = Composites.stack(20, 20, 10, 4, 0, 0, function (x, y) {
    if (Common.random() > 0.35) {
      return Bodies.rectangle(x, y, 64, 64, {
        render: {
          strokeStyle: '#ffffff',
          sprite: {
            texture: object1 // Make sure the image exists in public/img/
          }
        }
      });
    } else {
      return Bodies.circle(x, y, 46, {
        density: 0.0005,
        frictionAir: 0.06,
        restitution: 0.3,
        friction: 0.01,
        render: {
          sprite: {
            texture: object2
          }
        }
      });
    }
  });

  Composite.add(world, stack);

  // Mouse
  const mouse = Mouse.create(render.canvas);
  const mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: { visible: false }
    }
  });

  Composite.add(world, mouseConstraint);
  render.mouse = mouse;

  Render.lookAt(render, {
    min: { x: 0, y: 0 },
    max: { x: 800, y: 600 }
  });
});

onBeforeUnmount(() => {
  Matter.Render.stop(render);
  Matter.Runner.stop(runner);
});
</script>

<style scoped>
.matter-container {
  width: 800px;
  height: 600px;
  margin: 0 auto;
  align-content: center;
  justify-content: center;
  display: flex;
}

.square{
  display: flex;
  height: 250px;
  width: 250px;
  background: red;
}
</style>
