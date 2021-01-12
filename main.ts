basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P0,
    true,
    false,
    true
    )
    basic.showString("T:")
    basic.showNumber(dht11_dht22.readData(dataType.temperature))
    basic.showString("H:")
    basic.showNumber(dht11_dht22.readData(dataType.humidity))
})
