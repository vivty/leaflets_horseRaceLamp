# leaflets_horseRaceLamp
Running lights on the leaflets map

### 第一步： 引入
     <script src="../components/horseRaceLamp.js"></script>
     <link rel="stylesheet" href="../components/raceLamp.css">
     
### 第二步： 
    //地图搜索框和实现的功能
    var raceLampControl = createRaceLampControl();
    var RaceLampControl = new raceLampControl({
        raceItems: itemsData//itemsData为跑马灯上面显示的数据
    });
 
 ### 第三步：
     map.addControl(RaceLampControl);//把控件添加到地图中

