import React from 'react';
import { openSourceProjects } from '../data/content';
import { 
  Code2, 
  Star, 
  GitFork, 
  ExternalLink, 
  Terminal 
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectsSection() {
  return (
    <section id="projeler" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-teal-400 uppercase tracking-widest mb-2">
              <Code2 className="w-4 h-4" />
              <span>Açık Kaynak & Araçlar</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Geliştirdiğim Sistemler & Kütüphaneler
            </h2>
            <p className="text-slate-400 mt-2 text-sm max-w-xl">
              Yapay zeka topluluğuna kazandırdığım açık kaynak çerçeveler, araştırma yardımcı araçları ve geliştirici kütüphaneleri.
            </p>
          </div>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-teal-500/40 text-slate-300 hover:text-teal-300 text-xs font-mono transition-all self-start md:self-auto"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>Tüm Repolar (GitHub)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {openSourceProjects.map((project, index) => (
            <div
              key={index}
              className="bg-[#0e111c] border border-slate-800 hover:border-teal-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(20,184,166,0.2)] group"
            >
              <div>
                {/* Badge & Top Row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20">
                    {project.badge}
                  </span>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1 hover:text-amber-400 transition-colors">
                      <Star className="w-3.5 h-3.5 text-amber-400" />
                      {project.stars}
                    </span>
                    <span className="flex items-center gap-1 hover:text-slate-200 transition-colors">
                      <GitFork className="w-3.5 h-3.5 text-slate-500" />
                      {project.forks}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors font-mono mb-2 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-teal-400" />
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500">
                  {project.language}
                </span>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-teal-400 hover:text-teal-300 font-medium group/link"
                >
                  <span>Kaynak Kodu</span>
                  <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
