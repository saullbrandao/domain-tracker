export function DetailsSection() {
  return (
    <section className="bg-white shadow-md flex flex-col justify-evenly py-6 gap-4 text-center w-5/6 min-h-64 rounded-xl font-bold absolute -bottom-36">
      <article>
        <h3 className="uppercase text-gray-400 font-extrabold text-xs">
          Ip Address
        </h3>
        <p className="text-lg">192.212.174.101</p>
      </article>
      <article>
        <h3 className="uppercase text-gray-400 font-extrabold text-xs ">
          Location
        </h3>
        <p className="text-lg">Brooklyn, NY 10001</p>
      </article>
      <article>
        <h3 className="uppercase text-gray-400 font-extrabold text-xs ">
          Timezone
        </h3>
        <p className="text-lg">UTC -05:00</p>
      </article>
      <article>
        <h3 className="uppercase text-gray-400 font-extrabold text-xs">ISP</h3>
        <p className="text-lg">SpaceX Starlink</p>
      </article>
    </section>
  )
}
