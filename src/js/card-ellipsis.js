const pClampEllipsis = (function () {
  let module = document.querySelectorAll('#pEllipsis');
  for(let i = 0; i < module.length; i++) {
    $clamp(module[i], {clamp: 2});
  }
}) ();