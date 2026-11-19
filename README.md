# Labin Voice Studio

Phone web app: paste an AI-written audio script → Kokoro TTS voices (on your phone) + voice effects + sound effects + music → mixed soundtrack, subtitles, timings and an animation brief in one ZIP.

Open: https://kazilabin.github.io/voice-studio/ → Chrome ⋮ → Add to Home screen.

Script lines: `VOICE | NAME | voice | speed | effect`, `SET | lufs | -14`, `TIME | WHO | effect | text`, `TIME | SFX | name`, `TIME | MUSIC | bed | seconds`, `TIME | CUT | seconds`, `END | seconds`. TIME can be `+0.4` (after the previous line).

Voices: Kokoro-82M (Apache-2.0) via kokoro-js. Test mode without the model: `?fake=1`.
