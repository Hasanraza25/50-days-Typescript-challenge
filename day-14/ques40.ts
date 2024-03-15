function make_album(artist_name: string, album_title: string,num_tracks?: number){
    let album = {
    artist : artist_name,
    title : album_title
    }
    if(num_tracks){
        album['tracks'] = num_tracks;
    }
    return album;
}

let album1 = make_album("Atif Aslam", "Pehli Dafa");
let album2 = make_album("Ali Zafar", "Huqa Pani", 10);
let album3 = make_album("Nusrat Fateh Ali Khan", "Sangam");

console.log(album1);
console.log(album2);
console.log(album3);
