import React from "react"
import Fade from "react-reveal/Fade"

const WorkPage = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      {/* <Fade duration={2200}>
        <div className="flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row mb-5 max-h-80">
          <div className="w-2/4 flex flex-col justify-center bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-full lg:w-full">
            <h1 className="text-5xl mt-5 font-bold text-white">
              test<br></br>
            </h1>
            <p className="mt-5 text-white opacity-70">
              test
            </p>
          </div>
          <div className="overflow-hidden rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6 object-cover object-center h-full w-full">
            <img src={Image3} alt="image"></img>
          </div>
        </div>
      </Fade> */}

      <Fade bottom cascade>
        <div className="mt-10  flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
          <div className="w-1/3 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-black text-2xl">Ilmu</h3>
            <h4 className="mt-10 text-black opacity-70 text-l">Akhlak	Disiplin	Iman
Unggul dalam pengetahuan</h4>
          </div>

          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-black text-2xl">Akhlak</h3>
            <h4 className="mt-10 text-black opacity-70 text-xl">Santun dalam perilaku</h4>
          </div>
          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-black text-2xl">Disiplin</h3>
            <h4 className="mt-10 text-black  opacity-70 text-xl">Tertib dalam tindakan</h4>
          </div>
          <div className="lg:rounded-xl lg:w-1/3 lg:bg-dp bg-dp p-8 rounded-xl m-5 xxs:w-full xxs:bg-dp xxs:rounded-xl xs:w-full xs:bg-dp xs:rounded-xl sm:hidden md:hidden lg:block">
            <h3 className="text-black text-2xl">Iman</h3>
            <h4 className="mt-10 text-black opacity-70 text-xl">Kuat dalam keyakinan</h4>
          </div>
        </div>
      </Fade>

      <div className="mt-10 px-10">
        <h2 className="text-black text-4xl font-semibold"></h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-5xl text-gradient bg-gradient-to-r from-pink to-purple">
          Sejarah singkat
        </h3>

        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Al Miftahul Huda berdiri dari keinginan untuk menghadirkan tempat pengajian yang dapat menjadi wadah menuntut ilmu dan memperdalam ajaran Islam bagi masyarakat sekitar. Kegiatan ini berawal dari majelis kecil yang rutin mengadakan pembelajaran Al-Qur’an dan kajian keagamaan.

Seiring waktu, Al Miftahul Huda berkembang menjadi tempat yang terus menjaga semangat belajar dan kebersamaan. Melalui berbagai kegiatan keagamaan, pengajian ini berupaya menumbuhkan kecintaan terhadap ilmu, memperkuat iman, dan membina akhlak mulia di tengah masyarakat.
        </p>
      </div>
    </div>
  )
}

export default WorkPage
