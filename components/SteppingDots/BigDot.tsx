import FadeIn from '../Animations/Scroll/FadeIn';

export default function SmallDot() {
  return (
    <FadeIn className="flex justify-center">
      <div className="bg-purple-400 rounded-full w-12 h-12 mb-20" />
    </FadeIn>
  );
}
