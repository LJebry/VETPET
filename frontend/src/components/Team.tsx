const team = [
  {
    name: "Dr. Juan Pérez",
    role: "Veterinario Principal",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop&q=60"
  },
  {
    name: "Dra. María García",
    role: "Cirujana Veterinaria",
    image: "https://images.unsplash.com/photo-1594824476960-e78591a68bdc?w=400&auto=format&fit=crop&q=60"
  },
  {
    name: "Carlos López",
    role: "Especialista en Grooming",
    image: "https://images.unsplash.com/photo-1605651202724-13b132106728?w=400&auto=format&fit=crop&q=60"
  }
];

export default function Team() {
  return (
    <section id="equipo" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestro Equipo</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Profesionales apasionados dedicados al cuidado de tus mascotas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-brand-red-light font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}