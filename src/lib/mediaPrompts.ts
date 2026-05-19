export const mediaPromptBase =
  "Mixed-media Brazilian samba visual for Dance Bloc Brazil in Perth, premium editorial photography blended with subtle graphic movement ribbons, vivid brand accents in deep magenta #9E0096, electric pink #FF00F7, and green #00CC81, Carnival-inspired feathers, sequins, rhythm, confident movement, warm natural skin tones, modern clean composition, energetic but polished, no text, no logos, no distorted hands, no extra limbs, no fake signage.";

export function mediaPrompt(scene: string) {
  return `${mediaPromptBase} Scene: ${scene}`;
}
