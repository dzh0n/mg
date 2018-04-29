/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var pageName = 'index';
var storage = window.localStorage;

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');

        //navigator.vibrate([1000, 1000, 3000, 1000, 2000]);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};




document.addEventListener("deviceready", function(){

//проверка соединения
if(checkConnections()){
    setTimeout(function(){
      if(pageName == 'index') {
        ref = window.open('main.html', '_self');
      }
    }, 2500);
}
else {
    navigator.notification.alert(
    'Проверьте подключение к сети интернет!',  // message
    alertDismissed,         // callback
    'Внимание',            // title
    'Ok'                  // buttonName
    );
}
/*storage.removeItem('phone');
alert(storage.getItem('phone'));*/
//Если вошли впревый раз - нет сохраненного телефона, отправляем в настройки
if(storage.getItem('settings_phone')==null && pageName != 'settings' && pageName != 'index') {
  //ref = window.open('settings.html', '_self');
}


/*
var BackgroundFetch = window.BackgroundFetch;

// Your background-fetch handler.
var fetchCallback = function() {
    cordova.plugins.notification.local.schedule({
        id: 1021,
        title: 'КОНКУРС #1021 НА ПЕРЕВОЗКУ ГРУЗОВ',
        text: 'Перевозка извести. Стерлитамак - Салават. 3000 кг. 3 500 руб./рейс',
        data: { meetingId:"#123FG8" }
    });

    // Required: Signal completion of your task to native code
    // If you fail to do this, the OS can terminate your app
    // or assign battery-blame for consuming too much background-time
    BackgroundFetch.finish();
};

var failureCallback = function(error) {
    alert('- BackgroundFetch failed', error);
};

BackgroundFetch.configure(fetchCallback, failureCallback, {
    minimumFetchInterval: 15, // <-- default is 15
    stopOnTerminate: false,   // <-- Android only
    startOnBoot: true,        // <-- Android only
    forceReload: true         // <-- Android only
});
*/
/*
     cordova.plugins.notification.local.schedule({
            id: 1021,
            title: 'КОНКУРС #1021 НА ПЕРЕВОЗКУ ГРУЗОВ',
            text: 'Перевозка извести. Стерлитамак - Салават. 3000 кг. 3 500 руб./рейс',
            data: { meetingId:"#123FG8" }
        });*/

    /*cordova.plugins.backgroundMode.enable();
    cordova.plugins.backgroundMode.on('activate', function () {
        setInterval(function () {
           cordova.plugins.notification.local.schedule({
            id: 1021,
            title: 'КОНКУРС #1021 НА ПЕРЕВОЗКУ ГРУЗОВ',
            text: 'Перевозка извести. Стерлитамак - Салават. 3000 кг. 3 500 руб./рейс',
            data: { meetingId:"#123FG8" }
        });
       }, 30000);
    });
   //alert(navigator.connection.type);

  cordova.plugins.notification.local.on("click", function (notification) {
        if (notification.id == 1021) {
            //alert(notification.data.meetingId);
            cordova.plugins.backgroundMode.disable();
        }
    });*/
});


//проверка соединения
function checkConnections() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    if(networkState == Connection.WIFI || networkState == Connection.CELL_3G || networkState == Connection.CELL_4G )
        return true;
    else
        return false;
}


function alertDismissed() {

}
