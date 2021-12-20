import Matter from "matter-js"
import Bird from "../components/Bird"
import Floor from "../components/Floor";
import Obstacle from "../components/Obstacle";

import { Dimensions } from 'react-native'
import { getPipeSizePosPair } from "../utils/random";

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width


export default restart => {
    let engine = Matter.Engine.create({enableSleeping: false})

    let world = engine.world

   engine.gravity.y = 0.4;

    const PipeSizePosA = getPipeSizePosPair()
    const PipeSizePosB = getPipeSizePosPair(windowWidth * 0.9)


    return {
        physics: {engine, world},
        Bird: Bird(world, 'green', {x: 50, y: 300}, {height: 40, width: 40}),

        ObstacleTop1: Obstacle(world, 'ObstacleTop1', 'red', PipeSizePosA.pipeTop.pos, PipeSizePosA.pipeTop.size),
        ObstacleBottom1: Obstacle(world, 'ObstacleBottom1', 'blue', PipeSizePosA.pipeBottom.pos, PipeSizePosA.pipeBottom.size),
        
        ObstacleTop2: Obstacle(world, 'ObstacleTop2', 'red', PipeSizePosB.pipeTop.pos, PipeSizePosB.pipeTop.size),
        ObstacleBottom2: Obstacle(world, 'ObstacleBottom2', 'blue', PipeSizePosB.pipeBottom.pos, PipeSizePosB.pipeBottom.size),

        Floor: Floor(world, 'green', {x: windowWidth / 2, y: windowHeight}, {height: 50, width: windowWidth})
   }
}