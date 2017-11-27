// loop through each form and handle submit event

  // var form = document.forms[i];
  function passHardwareData(ware) {
    console.log(ware);
  }

  var checkboxes = [], hardware = {};
  $('#hardwareSubmit').on( "click", function() {
      console.log("submit clicked!");
      checkboxes = $('.form-check-input');
      // console.log(checkboxes);
      for(var i = 0; i < checkboxes.length; i++) {
        hardware[ "item" + i.toString() ] = checkboxes[i].checked;
      }
      passHardwareData(hardware);
    });
   // loop through all checkboxes to see if checked
   //

   // loop through all radio butotns to display value
  //  var radiobuttons = form.querySelectorAll("input[type='radio']:checked");
   //
  //  for(var m = 0; m < radiobuttons.length; m++) {
  //    results += radiobuttons[m].name + '=' + radiobuttons[m].value + '\n';
  //  }
   // console results
  //  console.log(results);
 // });
