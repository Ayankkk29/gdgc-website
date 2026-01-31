import React from "react";
import { Users, Linkedin, Github, Mail } from "lucide-react";

function DomainTeam({ team, domainColor }) {
    if (!team) {
        return (
            <section className="mb-12">
                <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-foreground mb-6">
                    <Users className="w-6 h-6" style={{ color: domainColor }} />
                    Our Team
                </h2>
                <div className="bg-secondary rounded-2xl p-8 text-center text-muted-foreground">
                    <p>Team information coming soon!</p>
                </div>
            </section>
        );
    }

    const { lead, coLead, members } = team;

    return (
        <section className="mb-12">
            <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-foreground mb-6">
                <Users className="w-6 h-6" style={{ color: domainColor }} />
                Our Team
            </h2>

            {/* Team Lead */}
            {lead && (
                <div className="mb-8">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                        Domain Lead
                    </h3>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div
                            className="flex-1 flex flex-col md:flex-row items-center md:items-start gap-6 p-6 bg-card border-2 rounded-2xl text-center md:text-left"
                            style={{ borderColor: domainColor }}
                        >
                            <div className="shrink-0 w-24 h-24 rounded-2xl overflow-hidden">
                                {lead.avatar ? (
                                    <img
                                        src={lead.avatar}
                                        alt={`${lead.name} avatar`}
                                        className="w-24 h-24 object-cover"
                                    />
                                ) : (
                                    <div
                                        className="w-full h-full flex items-center justify-center"
                                        style={{
                                            backgroundColor: `${domainColor}20`,
                                        }}
                                    >
                                        <span
                                            className="text-3xl font-bold"
                                            style={{ color: domainColor }}
                                        >
                                            {lead.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl font-bold text-foreground mb-1">
                                    {lead.name}
                                </h4>
                                <p
                                    className="text-sm font-medium mb-3"
                                    style={{ color: domainColor }}
                                >
                                    {lead.role}
                                </p>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                    {lead.bio}
                                </p>
                                <div className="flex gap-3.justify-center md:justify-start">
                                    {lead.linkedin && (
                                        <a
                                            href={lead.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center w-9 h-9 rounded-lg text-muted-foreground bg-secondary transition-colors hover:text-[#0077B5] hover:bg-accent"
                                            aria-label="LinkedIn"
                                        >
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                    )}
                                    {lead.github && (
                                        <a
                                            href={lead.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center w-9 h-9 rounded-lg text-muted-foreground bg-secondary transition-colors hover:text-foreground hover:bg-accent"
                                            aria-label="GitHub"
                                        >
                                            <Github className="w-5 h-5" />
                                        </a>
                                    )}
                                    {lead.email && (
                                        <a
                                            href={`mailto:${lead.email}`}
                                            className="flex items-center justify-center w-9 h-9 rounded-lg text-muted-foreground bg-secondary transition-colors hover:text-[#EA4335] hover:bg-accent"
                                            aria-label="Email"
                                        >
                                            <Mail className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                        {coLead && (
                            <div
                                className="flex-1 p-6 bg-card border-2 rounded-2xl text-center md:text-left"
                                style={{ borderColor: domainColor }}
                            >
                                <div className="flex items-center md:items-start gap-6">
                                    <div
                                        className="shrink-0 w-20 h-20 rounded-2xl overflow-hidden"
                                        style={{
                                            backgroundColor: `${domainColor}20`,
                                        }}
                                    >
                                        {coLead.avatar ? (
                                            <img
                                                src={coLead.avatar}
                                                alt={`${coLead.name} avatar`}
                                                className="w-20 h-20 object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <span
                                                    className="text-2xl font-bold"
                                                    style={{
                                                        color: domainColor,
                                                    }}
                                                >
                                                    {coLead.name
                                                        .split(" ")
                                                        .map((n) => n[0])
                                                        .join("")}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex-1 text-left">
                                        <h4 className="text-xl font-bold text-foreground mb-1">
                                            {coLead.name}
                                        </h4>
                                        <p
                                            className="text-sm font-medium mb-3"
                                            style={{ color: domainColor }}
                                        >
                                            {coLead.role}
                                        </p>
                                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                            {coLead.bio}
                                        </p>
                                        <div className="flex gap-3 justify-start">
                                            {coLead.linkedin && (
                                                <a
                                                    href={coLead.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center w-9 h-9 rounded-lg text-muted-foreground bg-secondary transition-colors hover:text-[#0077B5] hover:bg-accent"
                                                    aria-label="LinkedIn"
                                                >
                                                    <Linkedin className="w-5 h-5" />
                                                </a>
                                            )}
                                            {coLead.github && (
                                                <a
                                                    href={coLead.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center w-9 h-9 rounded-lg text-muted-foreground bg-secondary transition-colors hover:text-foreground hover:bg-accent"
                                                    aria-label="GitHub"
                                                >
                                                    <Github className="w-5 h-5" />
                                                </a>
                                            )}
                                            {coLead.email && (
                                                <a
                                                    href={`mailto:${coLead.email}`}
                                                    className="flex items-center justify-center w-9 h-9 rounded-lg text-muted-foreground bg-secondary transition-colors hover:text-[#EA4335] hover:bg-accent"
                                                    aria-label="Email"
                                                >
                                                    <Mail className="w-5 h-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Team Members */}
            {members && members.length > 0 && (
                <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                        Team Members
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {members.map((member, index) => (
                            <div
                                key={index}
                                className="p-6 bg-card border-2 rounded-2xl text-center md:text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                                style={{ borderColor: domainColor }}
                            >
                                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                                    <div
                                        className="shrink-0 w-20 h-20 rounded-2xl overflow-hidden"
                                        style={{
                                            backgroundColor: `${domainColor}20`,
                                        }}
                                    >
                                        {member.avatar ? (
                                            <img
                                                src={member.avatar}
                                                alt={`${member.name} avatar`}
                                                className="w-20 h-20 object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <span
                                                    className="text-2xl font-bold"
                                                    style={{
                                                        color: domainColor,
                                                    }}
                                                >
                                                    {member.name
                                                        .split(" ")
                                                        .map((n) => n[0])
                                                        .join("")}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex-1 text-left">
                                        <h4 className="text-lg font-bold text-foreground mb-1 truncate">
                                            {member.name}
                                        </h4>
                                        <p
                                            className="text-sm font-medium mb-3"
                                            style={{ color: domainColor }}
                                        >
                                            {member.role}
                                        </p>
                                        {member.bio && (
                                            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                                {member.bio}
                                            </p>
                                        )}
                                        <div className="flex gap-3">
                                            {member.linkedin && (
                                                <a
                                                    href={member.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center w-9 h-9 rounded-lg text-muted-foreground bg-secondary transition-colors hover:text-[#0077B5] hover:bg-accent"
                                                    aria-label="LinkedIn"
                                                >
                                                    <Linkedin className="w-5 h-5" />
                                                </a>
                                            )}
                                            {member.github && (
                                                <a
                                                    href={member.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center w-9 h-9 rounded-lg text-muted-foreground bg-secondary transition-colors hover:text-foreground hover:bg-accent"
                                                    aria-label="GitHub"
                                                >
                                                    <Github className="w-5 h-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}

export default DomainTeam;
