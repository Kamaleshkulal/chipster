$(document).ready(function() {
    $.ajax({
      url: 'exercise.json',
      dataType: 'json',
      success: function(data) {
        renderMachineCards(data);
      }
    });

    function renderMachineCards(data) {
      var machineData = $('#machineData');
      for (var i = 0; i < data.length+1; i++) {
        var machine = data[i];
        var statusClass;
        if (machine.status === 'RUNNING') {
          statusClass = 'running';
        } else if (machine.status === 'PAUSED') {
          statusClass = 'paused';
        } else if (machine.status === 'STOPPED') {
          statusClass = 'stopped';
        }
        
        var buttonClass = getStatusButtonClass(machine.status);

        var html =
        '<div class="chat-card">'+
        '<div class="chat-header' + statusClass +'"style="margin-bottom: 10px;">'+
        '<div class="status-button ' + statusClass + '" >'+
        '<div class="h2">'+ machine.name +
        '<button class="button ' + buttonClass + ' smaller-button" style="float: right; ">' + machine.status + '</button>' +
        '</div>'+
        '</div>'+
        '<div class= "chat-body">'+
        '<div class="text-left">'+ 'PERFORMANCE: &nbsp;  &nbsp; &nbsp; <span>' + machine.performance + '</span>'+
        '<div>'+'__ _ __ _ __ _ __ _ __ _ __ _ __ _ __ _ __ _ __ _ __ _ __ _ __'+'</div>'+
        '<div class="middle">' + machine.status + '&nbsp; SINCE:'+ '<span> &nbsp; &nbsp; ' + machine.since + '</div>' +
        '<div>'+'__ _ __ _ __ _ __ _ __ _ __ _ __ _ __ _ __ _ __ _ __ _ __ _ __'+'</div>'+
        '<p class="part">PARTS PRODUCED: ' + '<span>'+ machine.partsProduced + '</p>' +
        '</div>' +
        '</div>'
        machineData.append(html);
      }
    }

    function getStatusButtonClass(status) {
        if (status === 'RUNNING') {
          return 'running-button';
        } else if (status === 'PAUSED') {
          return 'paused-button';
        } else if (status === 'STOPPED') {
          return 'stopped-button';
        } else {
          return '';
        }
      }
  });