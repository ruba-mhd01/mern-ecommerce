export default function AppBackground({
  children,
}) {

  return (

    <div className="min-h-screen bg-[#f5f5f4] overflow-hidden relative">

      {/* BG EFFECTS */}
      <div
        className="
          absolute
          top-[-200px]
          left-[-120px]
          w-[420px]
          h-[420px]
          bg-zinc-300/30
          rounded-full
          blur-3xl
        "
      />

      <div
        className="
          absolute
          bottom-[-180px]
          right-[-100px]
          w-[400px]
          h-[400px]
          bg-stone-300/40
          rounded-full
          blur-3xl
        "
      />

      {/* GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
          [background-size:36px_36px]
        "
      />

      {/* CONTENT */}
      <div className="relative z-10">

        {children}

      </div>

    </div>
  );
}