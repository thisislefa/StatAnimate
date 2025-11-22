document.addEventListener('DOMContentLoaded', () => {
            const statWrappers = document.querySelectorAll('.number-display-wrapper');
            const sectionObserverTarget = document.getElementById('stats-section-observer');
            const DURATION = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--animation-duration'));
            let hasAnimated = false; 

            /**
             * Performs the counting animation for a single element.
             * @param {HTMLElement} element The span holding the counter value.
             * @param {number} target The final numerical value.
             */
            function animateCount(element, target) {
                const startTime = performance.now();
                const startValue = 0;
                
                function updateCount(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(1, elapsed / DURATION); // Ensure progress doesn't exceed 1
                    
                    // Use a smooth easing function (easeOutQuad)
                    const easedProgress = progress * progress;
                    
                    const currentValue = Math.floor(startValue + (target - startValue) * easedProgress);

                    element.textContent = currentValue.toLocaleString();

                    if (progress < 1) {
                        requestAnimationFrame(updateCount);
                    } else {
                        // Ensure the final value is exactly the target, to account for rounding errors
                        element.textContent = target.toLocaleString();
                    }
                }

                requestAnimationFrame(updateCount);
            }


            /**
             * Intersection Observer Callback: Starts animation when the section is visible.
             */
            const observerCallback = (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !hasAnimated) {
                        hasAnimated = true; 
                        
                        statWrappers.forEach((wrapper, index) => {
                            // Find the span element inside the wrapper
                            const counterElement = wrapper.querySelector('.animated-counter-value');
                            const targetValueStr = wrapper.getAttribute('data-target');
                            const targetValue = parseInt(targetValueStr, 10);

                            if (counterElement && !isNaN(targetValue)) {
                                // Add a staggered start delay for a nicer effect
                                setTimeout(() => {
                                    animateCount(counterElement, targetValue);
                                }, index * 100); 
                            }
                        });

                        observer.unobserve(sectionObserverTarget);
                    }
                });
            };

            // Create and start the observer
            const observer = new IntersectionObserver(observerCallback, {
                root: null, 
                threshold: 0.2 // Trigger when 20% of the target is visible
            });

            // Start observing the main section container
            observer.observe(sectionObserverTarget);
        });