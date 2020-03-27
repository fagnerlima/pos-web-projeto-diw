var contrastKey = 'contrast';
var contrastLight = 'light';
var contrastDark = 'dark';
var classDark = 'dark';

function isNullOrUndefined(value) {
  return value == null || value == undefined;
}

function getContrast() {
  return contrast = localStorage.getItem(contrastKey);
}

function isLightContrast() {
  return getContrast() == contrastLight;
}

function isDarkContrast() {
  return getContrast() == contrastDark;
}

function configContrast() {
  if (isDarkContrast()) {
    configDarkContrast();
    return;
  }

  configLightContrast();
}

function configLightContrast() {
  $('body').removeClass(classDark);
}

function configDarkContrast() {
  $('body').addClass(classDark);
}

$('body').ready(function() {
  configContrast();
});

$(document).ready(function() {
  $('.change-contrast').click(function() {
    var contrast = getContrast();

    localStorage.setItem(contrastKey, (isNullOrUndefined(contrast) || contrast == contrastLight)
      ? contrastDark : contrastLight);
    configContrast();
  });
});
