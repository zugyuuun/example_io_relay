ZGN(function()
{
  // 17番ピンで動作させます
  var relayPin = '17';

  // TerminalのGPIOインスタンスを取得します
  var gpio = ZGN.term('1').gpio;

  // 指定ピンを出力に設定
  gpio.pinMode(relayPin, ZGN.OUTPUT);

  // ONボタンをクリック
  $(document).on('click', '#on', function() {
    gpio.digitalWrite(relayPin, ZGN.HIGH);
  });

  // OFFボタンをクリック
  $(document).on('click', '#off', function() {
    gpio.digitalWrite(relayPin, ZGN.LOW);
  });
});
