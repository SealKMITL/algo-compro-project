class SongManager:
    def __init__(self):
        self.songs = []

    # Add a song
    def add_song(self, song):
        self.songs.append(song)

    # Remove a song by name
    def remove_song(self, song_name):
        self.songs = [song for song in self.songs if song.song_name != song_name]

    # Search songs by name, genre, language, or keyword
    def search_song(self, search_term):
        return [song for song in self.songs if search_term.lower() in song.song_name.lower()]

    # Merge sort for sorting songs by song name
    def merge_sort_songs(self):
        self.songs = self.merge_sort(self.songs)

    # Merge sort algorithm
    def merge_sort(self, arr):
        if len(arr) > 1:
            mid = len(arr) // 2
            left_half = arr[:mid]
            right_half = arr[mid:]

            self.merge_sort(left_half)
            self.merge_sort(right_half)

            i = j = k = 0

            while i < len(left_half) and j < len(right_half):
                if left_half[i].song_name < right_half[j].song_name:
                    arr[k] = left_half[i]
                    i += 1
                else:
                    arr[k] = right_half[j]
                    j += 1
                k += 1

            while i < len(left_half):
                arr[k] = left_half[i]
                i += 1
                k += 1

            while j < len(right_half):
                arr[k] = right_half[j]
                j += 1
                k += 1

        return arr

# Example usage
manager = SongManager()
manager.add_song(Song("Song A", "Pop", "English", "Joy"))
manager.add_song(Song("Song B", "R&B", "Spanish", "Relaxation"))
manager.add_song(Song("Song C", "Dance", "Mandarin", "Beauty"))

# Sort songs by name
manager.merge_sort_songs()
print("Sorted Songs:", manager.songs)

# Remove a song
manager.remove_song("Song B")

# Search for a song
print("Search Results:", manager.search_song("Song A"))
