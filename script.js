const passwordInput = document.getElementById('password');

const strengthMeter = document.createElement('div');
strengthMeter.style.height = '6px';
strengthMeter.style.borderRadius = '4px';
strengthMeter.style.marginTop = '-12px';
strengthMeter.style.marginBottom = '12px';
passwordInput.parentNode.insertBefore(strengthMeter, passwordInput.nextSibling);

passwordInput.addEventListener('input', () => {
  const val = passwordInput.value;
  let strength = 0;

  if (val.length >= 6) strength++;
  if (/[A-Z]/.test(val)) strength++;
  if (/[0-9]/.test(val)) strength++;
  if (/[^A-Za-z0-9]/.test(val)) strength++;

  switch(strength) {
    case 0:
    case 1:
      strengthMeter.style.backgroundColor = '#e74c3c'; // rouge faible
      strengthMeter.style.width = '25%';
      break;
    case 2:
      strengthMeter.style.backgroundColor = '#f39c12'; // orange moyen
      strengthMeter.style.width = '50%';
      break;
    case 3:
      strengthMeter.style.backgroundColor = '#27ae60'; // vert bon
      strengthMeter.style.width = '75%';
      break;
    case 4:
      strengthMeter.style.backgroundColor = '#2ecc71'; // vert fort
      strengthMeter.style.width = '100%';
      break;
  }
});