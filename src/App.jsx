import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Heart, Sparkles, Mail, Calendar, School, CheckCircle, ArrowRight, Instagram, Facebook, Youtube, Globe, ShoppingBag, BookText } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-emerald-50 text-emerald-950">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <img src="/logo.png" alt="Al‑Tarbiyyah Al‑Imaniyyah logo" className="w-10 h-10 rounded-full object-contain ring-1 ring-emerald-200 bg-white" />
            <div className="leading-tight">
              <div className="font-bold tracking-wide">Al‑Tarbiyyah Al‑Imaniyyah</div>
              <div className="text-xs text-emerald-700">Nurturing Faith | التربية الإيمانية</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-emerald-700">About</a>
            <a href="#programs" className="hover:text-emerald-700">Programs</a>
            <a href="#values" className="hover:text-emerald-700">Values</a>
            <a href="#schedule" className="hover:text-emerald-700">Schedule</a>
            <a href="#shop" className="hover:text-emerald-700">Shop</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
            <a href="#newsletter" className="hover:text-emerald-700">Newsletter</a>
          </nav>
          <a href="#programs" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 text-emerald-900 font-semibold shadow">
            Explore Courses <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(234,179,8,0.15),transparent_40%)]" />
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Nurture <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">Iman</span>,
              <br /> Practice <span className="text-yellow-500">Islam</span>,
              <br /> Achieve <span className="underline decoration-yellow-400 underline-offset-4">Ihsan</span>.
            </h1>
            <p className="mt-5 text-emerald-800/90 max-w-prose">
              A community‑rooted educational initiative offering authentic, engaging learning experiences grounded in the Qur’an and Sunnah—designed for families, youth, and women.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#programs" className="px-5 py-3 rounded-2xl bg-emerald-700 text-white font-semibold shadow">Browse Programs</a>
              <a href="#contact" className="px-5 py-3 rounded-2xl border border-emerald-300 font-semibold text-emerald-800">Get In Touch</a>
            </div>
            <div className="mt-4 text-sm text-emerald-700">Contact: <a href="mailto:thenurturingfaith@gmail.com" className="underline">thenurturingfaith@gmail.com</a></div>
          </motion.div>

          <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6, delay:0.1}} className="relative">
            <div className="aspect-[4/3] rounded-3xl shadow-xl bg-white border grid place-content-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto rounded-full grid place-content-center shadow ring-1 ring-emerald-200 bg-white">
                  <img src="/logo.png" alt="Al‑Tarbiyyah Al‑Imaniyyah logo" className="w-20 h-20 object-contain" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Al‑Tarbiyyah Al‑Imaniyyah</h3>
                <p className="text-sm text-emerald-700">Educational Organization</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold">About Us</h2>
              <p className="mt-4 text-emerald-800/90">
                Al‑Tarbiyyah Al‑Imaniyyah (التربية الإيمانية) is a mother‑daughter founded initiative dedicated to cultivating hearts and minds through structured study, reflection, and community practice. We focus on accessible courses, practical spirituality, and character development grounded in the Qur’an and authentic Sunnah.
              </p>
              <ul className="mt-6 space-y-3 text-emerald-900">
                <li className="flex items-start gap-3"><CheckCircle className="mt-0.5 w-5 h-5 text-yellow-500" />Authentic sources • Clear, age‑appropriate delivery</li>
                <li className="flex items-start gap-3"><CheckCircle className="mt-0.5 w-5 h-5 text-yellow-500" />Inclusive programs for youth, women, and families</li>
                <li className="flex items-start gap-3"><CheckCircle className="mt-0.5 w-5 h-5 text-yellow-500" />Action‑based learning that transforms daily life</li>
              </ul>
            </div>
            <div className="bg-white rounded-3xl border shadow p-6">
              <h3 className="text-xl font-semibold flex items-center gap-2"><Heart className="w-5 h-5 text-emerald-600" /> Mission</h3>
              <p className="mt-2 text-emerald-800/90">To nurture faith, cultivate sound character, and empower consistent practice of Islam—so learners progress toward ihsan in worship, relationships, and service.</p>
              <h3 className="mt-6 text-xl font-semibold flex items-center gap-2"><Sparkles className="w-5 h-5 text-yellow-500" /> Tagline</h3>
              <p className="mt-2 font-medium">Nurture Iman. Practice Islam. Achieve Ihsan.</p>
              <div className="mt-6">
                <div className="text-sm text-emerald-700">Nurturing Faith | التربية الإيمانية</div>
                <div className="text-xs text-emerald-600/80">Emerald & gold brand palette</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-16 md:py-20 bg-gradient-to-b from-white to-emerald-100/40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="text-3xl font-bold">Programs & Courses</h2>
            <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-emerald-300 font-semibold">Request Syllabus</a>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                title: "Akhlaaqiyaat: Character from Qur’an",
                desc: "Full‑surah studies of Al‑Mu’minoon 1–11, Al‑Hujurat, Luqman, Al‑Isra with practical weekly actions.",
                badge: "Core Track",
                book: true,
              },
              {
                title: "Women’s Tafsir Circle",
                desc: "Structured thematic tafsir with reflections, journaling prompts, and action points.",
                badge: "Women & Girls 15+",
              },
              {
                title: "Youth Foundations",
                desc: "Essential beliefs, worship, and manners presented in an engaging, age‑appropriate format.",
                badge: "Ages 9–15",
              },
            ].map((c, i) => (
              <div key={i} className="group bg-white rounded-3xl border shadow hover:shadow-lg transition overflow-hidden">
                <div className="p-6">
                  <div className="text-xs font-semibold text-emerald-700/80">{c.badge}</div>
                  <h3 className="mt-2 font-bold text-lg">{c.title}</h3>
                  <p className="mt-2 text-sm text-emerald-800/90">{c.desc}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2">
                      <School className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm">12‑week cohort • Weekly live class</span>
                    </div>
                    {c.book && (
                      <a href="#shop" className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-800 underline decoration-yellow-400 underline-offset-4">
                        Get the Book
                      </a>
                    )}
                  </div>
                  <a href="#contact" className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-700 text-white font-semibold">Join Waitlist <ArrowRight className="w-4 h-4"/></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="py-16 md:py-20">
        <div className="max-w-6xl mx_auto px-4">
          <h2 className="text-3xl font-bold">Our Approach & Values</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {title:"Authenticity", desc:"Qur’an & authentic Sunnah as primary sources, with classical scholarship informing application."},
              {title:"Clarity", desc:"Age‑appropriate language, scaffolded lessons, and practical weekly actions."},
              {title:"Community", desc:"Supportive circles, adab‑centered learning, and service projects."},
            ].map((v, i) => (
              <div key={i} className="bg-white rounded-3xl border shadow p-6">
                <h3 className="font-semibold text-lg">{v.title}</h3>
                <p className="mt-2 text-emerald-800/90 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule / Highlights */}
      <section id="schedule" className="py-16 md:py-20 bg-emerald-900 text-emerald-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-yellow-300" />
            <h2 className="text-3xl font-bold">Season Highlights</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { title:"Fall Cohorts", note:"Registration opens Sept 1", detail:"Akhlaaqiyaat • Women’s Tafsir • Youth Foundations" },
              { title:"Ramadan Program", note:"Online | 10:00–2:00", detail:"Daily reflections, Qur’an goals, and family activities" },
              { title:"Workshops", note:"Monthly", detail:"Tazkiyah, habits, du’a, journaling for ihsan" },
            ].map((s, i) => (
              <div key={i} className="rounded-3xl bg-emerald-800/50 border border-emerald-700 p-6">
                <div className="text-yellow-300 text-xs font-semibold">{s.note}</div>
                <h3 className="mt-1 font-semibold">{s.title}</h3>
                <p className="mt-2 text-emerald-100/90 text-sm">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="py-16 md:py-20 bg-gradient-to-b from-white to-emerald-100/40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-emerald-700" />
            <h2 className="text-3xl font-bold">Shop</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white rounded-3xl border shadow p-6 flex flex-col">
              <div className="flex items-center gap-3">
                <BookText className="w-5 h-5 text-yellow-500" />
                <h3 className="font-semibold text-lg">Akhlaaqiyaat Book</h3>
              </div>
              <p className="mt-2 text-sm text-emerald-800/90">Companion text for the Akhlaaqiyaat course. Click below to purchase.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="https://a.co/d/hkRBdfu" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-2xl bg-emerald-700 text-white font-semibold inline-flex items-center gap-2">Buy on Amazon <ArrowRight className="w-4 h-4" /></a>
                <a href="#programs" className="px-4 py-2 rounded-2xl border border-emerald-300 font-semibold inline-flex items-center gap-2">View Course <ArrowRight className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Join the Mailing List</h2>
          <p className="mt-3 text-emerald-800/90">Get course launches, reflections, and community updates in your inbox.</p>
          <form className="mt-6 max-w-md mx-auto grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]">
            <input type="email" placeholder="Your email" className="w-full rounded-2xl border px-4 py-3" />
            <button type="button" className="rounded-2xl px-5 py-3 bg-gradient-to-br from-yellow-400 to-yellow-500 font-semibold text-emerald-900">Subscribe</button>
          </form>
          <div className="mt-3 text-xs text-emerald-700">We’ll never share your email. Unsubscribe anytime.</div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-20 bg-gradient-to-b from-emerald-100/40 to-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold">Contact</h2>
            <p className="mt-3 text-emerald-800/90">We’d love to hear from you. For collaborations, classes, or speaking requests, reach out anytime.</p>
            <div className="mt-6 space-y-3 text-emerald-900">
              <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-emerald-700" /><a className="underline" href="mailto:thenurturingfaith@gmail.com">thenurturingfaith@gmail.com</a></div>
              <div className="flex items-center gap-3"><Globe className="w-5 h-5 text-emerald-700" /><span>Mississauga, Ontario</span></div>
            </div>
            <div className="mt-6 flex gap-4">
              <a className="p-2 rounded-full border hover:bg-white" href="#" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
              <a className="p-2 rounded-full border hover:bg-white" href="#" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
              <a className="p-2 rounded-full border hover:bg-white" href="#" aria-label="YouTube"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>
          <div className="bg-white rounded-3xl border shadow p-6">
            <form className="grid gap-4">
              <div>
                <label className="text-sm font-medium">Name</label>
                <input className="mt-1 w-full rounded-xl border px-4 py-2.5" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input type="email" className="mt-1 w-full rounded-xl border px-4 py-2.5" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea rows={5} className="mt-1 w-full rounded-xl border px-4 py-2.5" placeholder="How can we help?" />
              </div>
              <button type="button" className="rounded-2xl px-5 py-3 bg-emerald-700 text-white font-semibold">Send Message</button>
              <div className="text-xs text-emerald-700">This form is a visual demo. We can wire it to your email or a form service.</div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-emerald-700">© {new Date().getFullYear()} Al‑Tarbiyyah Al‑Imaniyyah Educational Organization</div>
          <div className="text-sm">Brand: Emerald & Gold • <span className="font-medium">“Nurturing Faith | التربية الإيمانية”</span></div>
        </div>
      </footer>
    </div>
  );
}
