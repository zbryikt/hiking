require! <[fs papaparse]>
hills = JSON.parse(fs.read-file-sync \out.json .toString!)

missing = do
  "觀音山": {lat: 25.13602831, lng: 121.42672058}
  "姜子寮山": {lat: 25.05226142, lng: 121.71248367}
  "天上山": {lat: 24.946076, lng: 121.456066}
  "馬拉邦山": {lat: 24.368944, lng: 120.913833}
  "南觀音山": {lat: 24.172935, lng: 120.741183}
  "阿罩霧山": {lat: 24.06122622, lng: 120.71353919}
  "貓囒山": {lat: 23.88136717, lng: 120.90801783}
  "松柏坑山": {lat: 23.82002197, lng: 120.64204994}
  "金柑樹山": {lat: 23.641281, lng: 120.813978}
  "梨子腳山": {lat: 23.56718433, lng: 120.60809933}
  "獨立山": {lat: 23.536910, lng: 120.607898}
  "大塔山": {lat: 23.535794, lng: 120.807886}
  "大凍山": {lat: 23.497829, lng: 120.719820}
  "紅毛埤山": {lat: 23.47999928, lng: 120.49196628}
  "藤枝山": {lat: 23.06204658, lng: 120.73848461}
  "棚集山": {lat: 22.50801653, lng: 120.65756222}
  "里龍山": {lat: 22.164374, lng: 120.732879}
  "卡拉寶山": {lat: 24.16167344, lng: 121.41137381}
  "蛇頭山": {lat: 23.553882, lng: 119.547636}

papaparse.parse fs.read-file-sync(\latlng.csv).toString!, do
  complete: (latlng)->
    #console.log it.data.1.0
    hills.map (h) ->
      ret = latlng.data.filter((v) -> v.0.trim! == h.name).0
      if !ret =>
        if missing[h.name] => ret = [0, 0, 0, "#{that.lat}", "#{that.lng}"]
        else
          console.log h.name
          return
      h.lat = +((ret.3).trim!)
      h.lng = +((ret.4).trim!)
      h.altitude = +h.altitude
    fs.write-file-sync \out-latlng.json, JSON.stringify(hills)
