export const text = `
video 1/1 (1497/10386) /home/dskim/yolov7-segmentation/12.mp4: 384x640 (no detections), 12.0ms
video 1/1 (1498/10386) /home/dskim/yolov7-segmentation/12.mp4: 384x640 (no detections), 11.8ms
video 1/1 (1499/10386) /home/dskim/yolov7-segmentation/12.mp4: 384x640 1 fire, 11.7ms
video 1/1 (1500/10386) /home/dskim/yolov7-segmentation/12.mp4: 384x640 (no detections), 12.2ms
video 1/1 (1501/10386) /home/dskim/yolov7-segmentation/12.mp4: 384x640 1 fire, 12.9ms
video 1/1 (1502/10386) /home/dskim/yolov7-segmentation/12.mp4: 384x640 (no detections), 14.0ms
video 1/1 (1503/10386) /home/dskim/yolov7-segmentation/12.mp4: 384x640 (no detections), 12.0ms
video 1/1 (1504/10386) /home/dskim/yolov7-segmentation/12.mp4: 384x640 1 fire, 12.1ms
video 1/1 (1505/10386) /home/dskim/yolov7-segmentation/12.mp4: 384x640 1 fire, 12.6ms
video 1/1 (1506/10386) /home/dskim/yolov7-segmentation/12.mp4: 384x640 1 fire, 12.3ms
video 1/1 (1507/10386) /home/dskim/yolov7-segmentation/12.mp4: 384x640 1 fire, 13.5ms
video 1/1 (1508/10386) /home/dskim/yolov7-segmentation/12.mp4: 384x640 1 fire, 13.4ms
video 1/1 (1509/10386) /home/dskim/yolov7-segmentation/12.mp4: 384x640 (no detections), 12.5ms
video 1/1 (1510/10386) /home/dskim/yolov7-segmentation/12.mp4: 384x640 (no detections), 13.6ms
video 1/1 (1511/10386) /home/dskim/yolov7-segmentation/12.mp4: 384x640 1 fire, 13.3ms
video 1/1 (1512/10386) /home/dskim/yolov7-segmentation/12.mp4: 384x640 1 fire, 13.1ms
video 1/1 (1513/10386) /home/dskim/yolov7-segmentation/12.mp4: 384x640 1 fire, 12.6ms
video 1/1 (1514/10386) /home/dskim/yolov7-segmentation/12.mp4: 384x640 1 fire, 12.1ms
video 1/1 (1515/10386) /home/dskim/yolov7-segmentation/12.mp4: 384x640 1 fire, 12.6ms
video 1/1 (1516/10386) /home/dskim/yolov7-segmentation/12.mp4: 384x640 1 fire, 12.8ms
video 1/1 (1517/10386) /home/dskim/yolov7-segmentation/12.mp4: 384x640 (no detections), 12.4ms
video 1/1 (1518/10386) /home/dskim/yolov7-segmentation/12.mp4: 384x640 (no detections), 12.3ms
video 1/1 (1519/10386) /home/dskim/yolov7-segmentation/12.mp4: 384x640 1 fire, 12.6ms
video 1/1 (1520/10386) /home/dskim/yolov7-segmentation/12.mp4: 384x640 1 fire, 12.6ms
video 1/1 (1521/10386) /home/dskim/yolov7-segmentation/12.mp4: 384x640 1 fire, 13.1ms
`;

const logData = (text: string) => {
  const lines = text.split('\n');

  const data = lines.map((line, index) => {
    const parts = line.split(',');

    let detections;
    if (parts[0].includes('no detections')) {
      detections = 'no detections';
    } else {
      detections = '1 fire';
    }

    const processingTime = parts[1];

    return {
      id: index + 1,
      detections,
      processingTime,
    };
  });

  console.log(JSON.stringify(data, null, 2));
};

export default logData;
