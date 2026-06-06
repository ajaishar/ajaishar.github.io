---
layout: page
title: Model Architectures
permalink: /courses/model-architectures/
description: A practitioner-oriented tour of modern model architectures — from the transformer to mixture-of-experts, state-space models, and the design choices that drive cost and capability in production agent systems.
year: 2026
term: Spring
instructor: Ajai Sharma
giscus_comments: false
---

## Overview

This course is a working practitioner's guide to the architectures behind the
models that power modern agent systems. The goal is not to re-derive the math
end-to-end — there are excellent resources for that — but to give engineers and
PMs the intuition to make architecture-aware product and infrastructure
decisions: which model family fits which workload, where the cost lives, and
what each design choice buys (or breaks) at inference time.

## Topics

1. **The transformer, revisited.** Self-attention as a soft retrieval primitive;
   why the residual stream matters; KV cache as the unsung performance lever.
2. **Beyond dense transformers.** Mixture-of-experts, sparse routing, and the
   economics of conditional compute.
3. **State-space and recurrent revivals.** Mamba/SSM-style architectures and
   when sub-quadratic context actually wins.
4. **Reasoning-time compute.** Chain-of-thought, self-consistency, tool use,
   and the trade-off between training-time and inference-time scaling.
5. **Adaptation without retraining.** LoRA, embedding tuning, retrieval
   augmentation — what's a parameter update vs. what's a context update.
6. **Inference systems.** Quantization, KV-cache management, batch scheduling,
   speculative decoding — the architecture-level decisions that determine
   per-token cost at scale.

## Format

A mix of lectures, code walkthroughs, and architecture decision exercises.
Materials will be added here as the course runs.

---

*Course materials and schedule below will be filled in as the term progresses.*
