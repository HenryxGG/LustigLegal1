export function Footer() {
    return (
        <footer className="bg-primary text-slate-400 py-12 border-t border-slate-800">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-serif text-white mb-4">Lustig & Asociados</h2>
                        <p className="max-w-sm mb-6">
                            Defendiendo sus derechos, protegiendo sus activos y asegurando su futuro con dedicación inquebrantable y experiencia legal de primer nivel.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-serif mb-4">Enlaces Rápidos</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-accent transition-colors">Áreas de Práctica</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Abogados</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Casos de Éxito</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Carreras</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-serif mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-accent transition-colors">Política de Privacidad</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Términos de Servicio</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Aviso Legal</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Accesibilidad</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs">
                    <p>&copy; {new Date().getFullYear()} Lustig & Asociados, P.C. Todos los derechos reservados.</p>
                    <p className="mt-2 md:mt-0">Publicidad de Abogados. Resultados previos no garantizan un resultado similar.</p>
                </div>
            </div>
        </footer>
    );
}
