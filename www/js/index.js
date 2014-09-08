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
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    getHistories : function()
    {
      // test: https://api.github.com/users/mralexgray/repos
      // https://usegalaxy.org/api/histories?key=218afad6146272c7c771688e10fb9884
      $.getJSON('https://usegalaxy.org/api/histories?key=218afad6146272c7c771688e10fb9884', function(data) {
        document.getElementById("myHistories").innerHTML = JSON.stringify(data);
        }).fail(function(d) {
                document.getElementById("myHistories").innerHTML = JSON.stringify(d);
                alert("error");
            });
        /*$.getJSON('https://api.github.com/users/mralexgray/repos', function(d) {
                document.getElementById("myHistories").innerHTML = JSON.stringify(data);
                alert("huh");
            }).done(function(d) {
            }).fail(function(d) {
                document.getElementById("myHistories").innerHTML = d;
                alert("error");
            }).always(function(d) {
            alert("edfdsfs");
            });*/
    }
    
    /*function getJSONP(url, success) {

        var ud = '_' + +new Date,
            script = document.createElement('script'),
            head = document.getElementsByTagName('head')[0] 
                   || document.documentElement;

        window[ud] = function(data) {
            head.removeChild(script);
            success && success(data);
        };

        script.src = url.replace('callback=?', 'callback=' + ud);
        head.appendChild(script);

    }

    getJSONP('https://usegalaxy.org/api/histories?key=218afad6146272c7c771688e10fb9884', function(data){
        console.log(data);
    }); */
    
};

        