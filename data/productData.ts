import type { Product } from '../types/types';

export const products: Product[] = [
    {
        id: 'ethiopian-yirgacheffe',
        category: 'SINGLE ORIGIN',
        title: 'Ethiopian Yirgacheffe',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkZcE-h2AQ8W5uTJV9ZAi9e5OBXT_m115WU9vocL-ruYNFFu4XUnjINZyWLHZ2rFiTf2X1S-uppB8EGHynWrxt893jClSpehKoc8o2uDBPOFc88ywRNpOjE6V_FSY-sqqVKuYiLlXzyzwyoTFvSB3_qthlHr-lSDVCJw42dTQSF7heGFQb04BQ1amQP5m2BjvSe7iF1shRCb6ppkQCqCxOnm0-MXUKYuPploxmhv27ZoF4Va1LfRmElRvVJb7r8j4eZnnK0WZ44Hk3',
        details: {
            left: 'Floral Notes',
            right: '2024 Harvest',
        },
        rotation: 'left',
        backgroundColor: 'bg-coffee-dark',
    },
    {
        id: 'morning-jolt',
        category: 'BESTSELLER',
        title: 'The Morning Jolt',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBo26Oys2hFMv_YLZJJoK0kGqnjefaAAqGMApmGxwMZn6dNWPr-FXoEw1K_qUh8cruTYobdFj3Fqb_tfbOZzI5CIyEfVwhXJ2PjDNJSbImofYAM9PcKRKK3oL_f9iQNx8nt1okTj3rJgO-CvPD3uR4kh-xSvPnKBMk43_BCRh7O88mXpAr6PX9keXeKfAMQNDom3zwxed54cJ__eL7si7OGB08_lk6dOeOEkhA4tS08yNbth-_7BKGbKY23l-tswIsFwiwk1SPxTh9e',
        details: {
            left: '',
            right: '',
        },
        rotation: 'center',
        backgroundColor: 'bg-black',
        isBestseller: true,
        description: 'Our signature dark roast blend.',
    },
    {
        id: 'cold-brew-kit',
        category: 'NEW ARRIVAL',
        title: 'Cold Brew Kit',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbPzuOyAuxP_tKQ8nq-chx2UkBRgHaJIgPR186-XelkvH169XuV86lhj_GJLKWvwfk_VcjlJW9jPwO-g-tkwDEXIF967LqNs9fonuknourG0bOW1Pi1CNWkkHW7NTlSaeZYJrTrM25WKypF0HV0Egc5boe9N8F-TVhLZQ0JNkSTgwxYUhgg4oYtFV5B0Sl_dVTPU29R_GEnsng3dv6Ku5doCfpQ3jt7yGt9fLOyv1Gb6hJY4ryRgU6AQUq3WQjzH7iiBhLTWWllMKL',
        details: {
            left: 'Ready in 12h',
            right: 'Smooth Finish',
        },
        rotation: 'right',
        backgroundColor: 'bg-[#2E3532]',
    },
];
