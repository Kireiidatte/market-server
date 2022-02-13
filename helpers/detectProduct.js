const tf = require('@tensorflow/tfjs-node');
const mobilenet = require('@tensorflow-models/mobilenet');
const fs = require('fs');
const path = require('path');

// 이미지를 받아서 비슷한 이미지 결과값 반환
module.exports = function detectProduct(url, callback) {
    const image = fs.readFileSync(url);
    const input = tf.node.decodeImage(image, 3);
    mobilenet.load().then((model)=> {
        model.classify(input).then((result) => {
            callback(result[0].className)
        })
    })
}