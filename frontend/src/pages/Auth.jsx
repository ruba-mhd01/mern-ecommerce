import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { authService } from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function Auth() {
  const navigate = useNavigate();
  const { login, closeAuth } = useAuth();

  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setError("");
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const switchMode = (val) => {
    setIsLogin(val);
    setError("");
    setForm({ name: "", email: "", password: "" });
    setShowPassword(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      setLoading(true);
      if (isLogin) {
        const data = await authService.login({ email: form.email, password: form.password });
        login(data);
        navigate("/");
      } else {
        await authService.register(form);
        const data = await authService.login({ email: form.email, password: form.password });
        login(data);
        navigate("/");
      }
    } catch (err) {
      setError(err?.response?.data?.msg || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/40
        backdrop-blur-md
        p-6
      "
    >

      <div
        className="
          relative
          w-full
          max-w-md
        "
      >
        <div className="flex justify-center mb-5">
          <button
            onClick={closeAuth}
            className="
                    inline-flex
        items-center
        gap-1.5
        text-sm
        text-white/80
        hover:text-white
        transition-colors
        group
      "
          >
            <svg
              className="  w-4  h-4 transition-transform group-hover:-translate-x-0.5 "
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to store
          </button>
        </div>


        {/* CARD */}
        <div
          className="
      bg-white/92
      backdrop-blur-xl
      rounded-3xl
      border
      border-white/40
      shadow-2xl
      overflow-hidden
    "
        >

          {/* Banner */}
          <div className="bg-zinc-900 px-8 pt-8 pb-7 relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full border border-white/10" />
            <div className="absolute -bottom-6 left-10 w-20 h-20 rounded-full border border-white/5" />

            {/* Brand */}
            <div className="flex items-center gap-2 mb-5">
              <div className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <span className="text-white font-semibold tracking-widest text-sm">MARKET</span>
            </div>

            <h1 className="text-2xl font-bold text-white leading-snug mb-1">
              {isLogin ? "Welcome back" : "Create account"}
            </h1>
            <p className="text-zinc-400 text-sm">
              {isLogin ? "Sign in to continue shopping" : "Join thousands of happy shoppers"}
            </p>
          </div>

          {/* Body */}
          <div className="px-7 pt-6 pb-7">

            {/* Toggle */}
            <div
              className="
    relative
    flex
    bg-zinc-100/80
    backdrop-blur-sm
    rounded-2xl
    p-1
    mb-7
    border
    border-zinc-200
  "
            >

              {/* ACTIVE SLIDER */}
              <div
                className={`
      absolute
      top-1
      bottom-1
      w-[calc(50%-4px)]
      rounded-xl
      bg-zinc-900
      shadow-lg
      transition-all
      duration-300
      ${isLogin
                    ? "left-1"
                    : "left-[calc(50%)]"
                  }
    `}
              />


              {/* LOGIN */}
              <button
                type="button"
                onClick={() => switchMode(true)}
                className={`
      relative
      z-10
      flex-1
      h-11
      rounded-xl
      text-sm
      font-semibold
      tracking-wide
      transition-all
      duration-300
      ${isLogin
                    ? "text-white"
                    : "text-zinc-600 hover:text-zinc-800"
                  }
    `}
              >

                Sign in

              </button>


              {/* REGISTER */}
              <button
                type="button"
                onClick={() => switchMode(false)}
                className={`
      relative
      z-10
      flex-1
      h-11
      rounded-xl
      text-sm
      font-semibold
      tracking-wide
      transition-all
      duration-300
      ${!isLogin
                    ? "text-white"
                    : "text-zinc-600 hover:text-zinc-800"
                  }
    `}
              >

                Register

              </button>

            </div>

            {/* Error */}
            {error && (
              <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl mb-5">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M12 5a7 7 0 110 14A7 7 0 0112 5z" />
                </svg>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Name — register only */}
              {!isLogin && (
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5 uppercase tracking-wide">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="Alex Kim"
                      value={form.name}
                      onChange={handleChange}
                      required={!isLogin}
                      className="w-full h-11 rounded-xl border border-zinc-200 bg-zinc-50 pl-4 pr-10 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-zinc-900 focus:bg-white transition"
                    />
                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Email */}
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5 uppercase tracking-wide">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full h-11 rounded-xl border border-zinc-200 bg-zinc-50 pl-4 pr-10 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-zinc-900 focus:bg-white transition"
                  />
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-medium text-zinc-300 uppercase tracking-wide">
                    Password
                  </label>
                  {isLogin && (
                    <button
                      type="button"
                      className="text-xs text-zinc-400 hover:text-zinc-700 transition-colors"
                    >
                      Forgot password?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder={isLogin ? "••••••••" : "Min. 8 characters"}
                    value={form.password}
                    onChange={handleChange}
                    required
                    className="w-full h-11 rounded-xl border border-zinc-200 bg-zinc-50 pl-4 pr-10 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-zinc-900 focus:bg-white transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700 transition-colors"
                  >
                    {showPassword ? (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Social divider */}
              <div className="flex items-center gap-3 py-1">
                <div className="flex-1 h-px bg-zinc-100" />
                <span className="text-xs text-zinc-400 uppercase tracking-wide">or continue with</span>
                <div className="flex-1 h-px bg-zinc-100" />
              </div>

              {/* Social buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 h-10 rounded-xl border border-zinc-200 bg-white text-zinc-700 text-sm font-medium hover:bg-zinc-50 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  Google
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 h-10 rounded-xl border border-zinc-200 bg-white text-zinc-700 text-sm font-medium hover:bg-zinc-50 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.09.682-.218.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.09-.647.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.104-.254-.447-1.27.097-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.82c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.202 2.394.1 2.646.64.699 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.16 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  GitHub
                </button>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="
    relative
    overflow-hidden
    w-full
    h-12
    rounded-2xl
    bg-zinc-900
    hover:bg-black
    disabled:opacity-60
    disabled:cursor-not-allowed
    text-white
    text-sm
    font-semibold
    tracking-wide
    transition-all
    duration-300
    shadow-lg
    hover:shadow-2xl
    hover:-translate-y-[1px]
    active:translate-y-0
    mt-2
  "
              >

                {/* SHINE EFFECT */}
                <span
                  className="
      absolute
      inset-0
      bg-gradient-to-r
      from-transparent
      via-white/10
      to-transparent
      -translate-x-full
      hover:translate-x-full
      transition-transform
      duration-1000
    "
                />

                <span className="relative z-10">

                  {loading
                    ? "Please wait..."
                    : isLogin
                      ? "Sign in to your account"
                      : "Create my account"}

                </span>

              </button>
            </form>

            {/* Terms — register only */}
            {!isLogin && (
              <p className="text-center text-xs text-zinc-300 mt-4 leading-relaxed">
                By creating an account you agree to our{" "}
                <span className="text-zinc-500 cursor-pointer hover:underline">Terms</span>
                {" "}and{" "}
                <span className="text-zinc-500 cursor-pointer hover:underline">Privacy Policy</span>
              </p>
            )}
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex items-center justify-center gap-6 mt-5">
          {[
            { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", label: "Secure login" },
            { icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: "Safe checkout" },
            { icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z", label: "Free returns" },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-1.5 text-zinc-300">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
              </svg>
              <span className="text-xs">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}