// Services data
const services = [
    {
        id: "energy-law",
        title: "Energy Law & Policy",
        icon: "fas fa-balance-scale",
        description: "Expert guidance on legal frameworks, regulatory compliance, and policy development for Uganda's energy sector.",
        details: {
            overview: "Navigating the complex legal landscape of Uganda's emerging oil and gas industry requires specialized knowledge of both national legislation and international standards.",
            services: [
                "Regulatory compliance advisory for petroleum operations",
                "Contract review and negotiation support",
                "Policy analysis and development for energy sector",
                "Local content regulation implementation",
                "Environmental law and compliance"
            ],
            benefits: [
                "Reduced legal risks in energy operations",
                "Improved compliance with Ugandan petroleum laws",
                "Enhanced negotiation position in contracts",
                "Better understanding of evolving regulatory landscape"
            ]
        }
    },
    {
        id: "hse-management",
        title: "HSE Management Systems",
        icon: "fas fa-shield-alt",
        description: "Comprehensive Health, Safety, and Environmental management solutions for energy operations.",
        details: {
            overview: "Implementing robust HSE systems is critical for responsible energy development. My approach combines international best practices with local operational realities.",
            services: [
                "HSE policy and procedure development",
                "Risk assessment and management",
                "Incident investigation and reporting",
                "Environmental impact assessments",
                "Safety culture development programs"
            ],
            benefits: [
                "Reduced workplace incidents and environmental impacts",
                "Improved regulatory compliance",
                "Enhanced corporate reputation",
                "Lower insurance premiums through better risk management"
            ]
        }
    },
    {
        id: "financial-management",
        title: "Financial Management",
        icon: "fas fa-chart-line",
        description: "Financial planning, analysis, and management tailored for oil, gas, and energy projects.",
        details: {
            overview: "Effective financial management is crucial for the capital-intensive energy sector. My services help optimize financial performance throughout project lifecycles.",
            services: [
                "Project financing and investment analysis",
                "Cost control and budget management",
                "Financial reporting for energy projects",
                "Revenue forecasting and management",
                "Tax planning for petroleum operations"
            ],
            benefits: [
                "Improved project financial performance",
                "Better capital allocation decisions",
                "Enhanced investor confidence",
                "Optimized tax positions"
            ]
        }
    },
    {
        id: "renewable-energy",
        title: "Renewable Energy Integration",
        icon: "fas fa-solar-panel",
        description: "Strategies for integrating renewable energy sources into traditional energy operations.",
        details: {
            overview: "The energy transition requires strategic integration of renewables with existing hydrocarbon operations. I provide guidance on this critical evolution.",
            services: [
                "Renewable energy feasibility studies",
                "Hybrid energy system design",
                "Solar and wind integration planning",
                "Energy transition roadmap development",
                "Carbon offset strategy implementation"
            ],
            benefits: [
                "Reduced carbon footprint",
                "Long-term energy cost savings",
                "Future-proofing energy operations",
                "Enhanced sustainability credentials"
            ]
        }
    },
    {
        id: "project-management",
        title: "Project Planning & Management",
        icon: "fas fa-tasks",
        description: "End-to-end project management for oil, gas, and energy infrastructure projects.",
        details: {
            overview: "Successful energy projects require meticulous planning and execution. My project management approach ensures deliverables are met on time and within budget.",
            services: [
                "Project feasibility and scoping",
                "Schedule development and critical path analysis",
                "Stakeholder management and communication",
                "Resource allocation and team management",
                "Quality assurance and control"
            ],
            benefits: [
                "On-time, on-budget project delivery",
                "Reduced project risks",
                "Improved stakeholder satisfaction",
                "Efficient resource utilization"
            ]
        }
    },
    {
        id: "oil-gas-accounting",
        title: "Oil & Gas Accounting",
        icon: "fas fa-calculator",
        description: "Specialized accounting services for upstream, midstream, and downstream operations.",
        details: {
            overview: "Petroleum accounting requires unique expertise due to joint ventures, production sharing agreements, and complex revenue recognition.",
            services: [
                "Joint interest billing and accounting",
                "Production revenue accounting",
                "AFE (Authorization for Expenditure) tracking",
                "Royalty and tax calculations",
                "Financial reporting for petroleum operations"
            ],
            benefits: [
                "Accurate financial reporting for stakeholders",
                "Improved cash flow management",
                "Compliance with petroleum accounting standards",
                "Better joint venture partner relationships"
            ]
        }
    },
    {
        id: "climate-change",
        title: "Climate Change & Carbon Management",
        icon: "fas fa-leaf",
        description: "Strategies for mitigating climate impacts and managing carbon emissions in energy operations.",
        details: {
            overview: "As climate concerns grow, proactive carbon management becomes essential for energy companies. I help develop practical decarbonization strategies.",
            services: [
                "Carbon footprint assessment",
                "Emissions reduction planning",
                "Carbon credit strategy development",
                "Climate risk assessment",
                "Sustainability reporting"
            ],
            benefits: [
                "Reduced regulatory and reputational risks",
                "Cost savings through efficiency improvements",
                "Enhanced access to green financing",
                "Improved stakeholder relations"
            ]
        }
    },
    {
        id: "energy-economics",
        title: "Energy Economics & Market Analysis",
        icon: "fas fa-chart-bar",
        description: "Economic analysis and market intelligence for informed energy investment decisions.",
        details: {
            overview: "Understanding energy economics is crucial for profitable operations in volatile markets. I provide analysis tailored to East Africa's energy landscape.",
            services: [
                "Energy market analysis and forecasting",
                "Investment feasibility studies",
                "Cost-benefit analysis for energy projects",
                "Price risk management strategies",
                "Supply-demand balance analysis"
            ],
            benefits: [
                "Data-driven investment decisions",
                "Improved understanding of market dynamics",
                "Better price risk management",
                "Enhanced competitive positioning"
            ]
        }
    }
];

// DOM Elements
const servicesGrid = document.getElementById('servicesGrid');
const serviceDetailModal = document.getElementById('service-detail-modal');

// Initialize services page
function initServicesPage() {
    if (!servicesGrid) return;
    
    // Clear existing content
    servicesGrid.innerHTML = '';
    
    // Add service tiles
    services.forEach(service => {
        const tile = document.createElement('div');
        tile.className = 'service-tile';
        tile.innerHTML = `
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;
        
        tile.addEventListener('click', () => {
            showServiceDetail(service);
        });
        
        servicesGrid.appendChild(tile);
    });
}

// Show service detail modal
function showServiceDetail(service) {
    if (!serviceDetailModal) return;
    
    // Create detail content
    const detailContent = `
        <div class="detail-content">
            <button class="close-detail"><i class="fas fa-times"></i></button>
            <div class="detail-header">
                <div class="detail-icon">
                    <i class="${service.icon}"></i>
                </div>
                <h2>${service.title}</h2>
                <p>${service.description}</p>
            </div>
            <div class="detail-body">
                <h3>Overview</h3>
                <p>${service.details.overview}</p>
                
                <h3>Services Offered</h3>
                <ul>
                    ${service.details.services.map(item => `<li>${item}</li>`).join('')}
                </ul>
                
                <h3>Benefits</h3>
                <ul>
                    ${service.details.benefits.map(item => `<li>${item}</li>`).join('')}
                </ul>
                
                <p style="margin-top: 30px; font-style: italic;">Contact me to discuss how I can help with your ${service.title.toLowerCase()} needs.</p>
            </div>
        </div>
    `;
    
    // Set content and show modal
    serviceDetailModal.innerHTML = detailContent;
    serviceDetailModal.classList.add('active');
    
    // Add close functionality
    const closeBtn = serviceDetailModal.querySelector('.close-detail');
    closeBtn.addEventListener('click', () => {
        serviceDetailModal.classList.remove('active');
    });
    
    // Close when clicking outside content
    serviceDetailModal.addEventListener('click', (e) => {
        if (e.target === serviceDetailModal) {
            serviceDetailModal.classList.remove('active');
        }
    });
    
    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && serviceDetailModal.classList.contains('active')) {
            serviceDetailModal.classList.remove('active');
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize main functionality
    if (typeof initWebsite === 'function') {
        initWebsite();
    }
    
    // Initialize services page if on services page
    if (servicesGrid) {
        initServicesPage();
    }
});