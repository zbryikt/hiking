require! <[fs papaparse]>
parse = ->
  (res, rej) <- new Promise _
  papaparse.parse(
    fs.read-file-sync '100m.csv' .toString!
    complete: (ret) -> res ret
  )
parse!
  .then (ret) ->
    ret.data.splice 0, 1
    result = ret.data
      .map (d) ->
        if !d.1 => return
        ll = d.8.replace(/ /g,'').split('E').map (n)->
          m = n.split /[^0-9]/g .filter -> it? and it != ''
          r = +(m.0 or 0) + (+(m.1 or 0) * 1/60) + (+(m.2 or 0) * 1/3600)
          return r
        [lat, lng] = [ll.0, ll.1]
        ret = 
          id: "#{d.0}".padStart(3, \0)
          name: d.2
          altitude: d.4
          loation: d.9
          brief: d.11
          feature: d.10
          season: ''
          schedule: ''
          traffic: ''
          note: ''
          map: null
          lat: lat
          lng: lng
        return ret
      .filter -> it
    fs.write-file-sync "100m.json", JSON.stringify(result)
