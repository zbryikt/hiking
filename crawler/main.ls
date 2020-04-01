require! <[fs request cheerio chainify progress colors]>

progress-bar = (total = 10, text = "converting") ->
  bar = new progress(
    "   #text [#{':bar'.yellow}] #{':percent'.cyan} :etas",
    { total: total, width: 60, complete: '#' }
  )
list = [1 to 100]
bar = progress-bar list.length

handler = ({item, percent}) -> new Promise (res, rej) ->
  (e,r,b) <- request {
    url: "https://isports.sa.gov.tw/Apps/TIS05/TIS0550M_02V1.aspx?MENU_PRG_CD=16&LEFT_MENU_ACTIVE_ID=119&PKNO=#item"
    method: \GET
  }, _
  bar.tick!
  $ = cheerio.load(b)
  name = $(\#IsportContent_M_MOUNT_NM).text!
  if name == \土庫丘 => name = \土庫岳
  id = $(\#IsportContent_M_MOUNT_SET_NO).text!
  altitude = $(\#IsportContent_M_MOUNT_HEIGHT_MM).text!
  location = $(\#IsportContent_M_NOUNT_LOC).text!
  brief = $(\#IsportContent_M_MOUNT_INTRO_EXP).text!
  feature = $(\#IsportContent_M_MOUNT_ENVRMT_CRTS_EXP).text!
  season = $(\#IsportContent_M_MOUNT_CLIMB_SEASON_EXP).text!
  schedule = $(\#IsportContent_M_MOUNT_CLIMB_WAY_EXP).text!
  traffic = $(\#IsportContent_M_MOUNT_TRAFFIC_INFO_EXP).text!
  note = $(\#IsportContent_M_MOUNT_NOTICE_ITEM_EXP).text!
  map = $('#IsportContent_M_MOUNT_MAP img').attr(\src)
  return res({id,name,altitude,location,brief,feature,season,schedule,traffic,note,map})

chainify {list,delay: 1000}, handler
  .then (data, fail) ->
    hills = data.data.map -> it.data
    fs.write-file-sync "out.json", JSON.stringify(hills)
    if fail => console.log "fail cases: ", fail
