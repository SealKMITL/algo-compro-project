class Song:
    def __init__(self, song_name, genre, language, keyword):
        self.song_name = song_name
        self.genre = genre
        self.language = language
        self.keyword = keyword

    def __repr__(self):
        return f"{self.song_name} ({self.genre}) - {self.language} - {self.keyword}"
