import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const createProject = mutation({
    args: {
        projectName: v.string(),
        teamId: v.string(),
        createdBy: v.string(),
        archive: v.boolean(),
        projectDocument: v.string()
    },
    handler: async (ctx, args) => {
        const result = await ctx.db.insert('projects', args);
        return result;
    },
})

export const getProjects = query({
    args: {
        teamId: v.string()
    },
    handler: async (ctx, args) => {
        const result = ctx.db.query('projects')
            .filter(q => q.eq(q.field('teamId'), args.teamId))
            .order('desc')
            .collect();

        return result;
    }
})