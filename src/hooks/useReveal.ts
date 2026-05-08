import { useEffect } from 'react'

/*
  Observa todos os elementos com [data-reveal] e adiciona .is-visible
  quando entram no viewport. O atributo data-reveal-delay (em ms) é
  passado para a custom property --reveal-delay no elemento, criando
  efeito cascata sem nenhum setTimeout.

  rootMargin '-50px' no bottom faz o elemento estar 50px dentro da tela
  antes de triggar — evita revelar logo no scroll rápido.
*/
export function useReveal() {
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

        const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) return
                    const el = entry.target as HTMLElement
                    const delay = el.dataset.revealDelay ?? '0'
                    el.style.setProperty('--reveal-delay', `${delay}ms`)
                    el.classList.add('is-visible')
                    observer.unobserve(el)
                })
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        )

        elements.forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])
}
